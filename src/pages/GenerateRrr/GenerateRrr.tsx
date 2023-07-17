import React from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { SelectItem } from "../../core/interfaces/select-item.interface";
import FormSelectInput from "../../components/Form/FormSelectInput/FormSelectInput";
import rrrGeneratorService from "../../core/service/rrr-generator.service";
import Biller from "../../core/models/biller.model";
import BillerProduct from "../../core/models/biller-product.model";
import Product from "../../core/models/product.model";
import FormInput from "../../components/Form/FormInput/FormInput";
import FormTextArea from "../../components/Form/FormTextArea/FormTextArea";
import { PaymentFormTypes } from "../../core/types/form-types";
import FormButton from "../../components/Form/FormButton/FormButton";
import RemitaPayment from "react-remita";
import useGlobalData from "../../core/hooks/useGlobalData";

const GenerateRrr = () => {
  const { configData } = useGlobalData();
  const [submitting, setSubmitting] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [billers, setBillers] = React.useState<Biller[]>([]);
  const [billerProduct, setBillerProduct] = React.useState<BillerProduct>(
    new BillerProduct()
  );
  const [products, setProducts] = React.useState<Product[]>([]);
  const [billersSelectItems, setBillersSelectItems] = React.useState<
    SelectItem[]
  >([]);
  const [billerProductsSelectItems, setBillerProductsSelectItems] =
    React.useState<SelectItem[]>([]);
  const [selectedProduct, setSelectedProduct] = React.useState<Product>(
    new Product(null)
  );
  const [successData, setSuccessData] = React.useState<{
    rrr: string;
    billerName: string;
    serviceName: string;
    amount: number;
    status: string;
    firstName: string;
    lastName: string;
    email: string;
    naration: string;
  } | null>(null);
  const [isgenerated, setIsGenerated] = React.useState<boolean>(false);
  const [errorData, setErrorData] = React.useState<string>("");
  const [paymentData, setpaymentData] = React.useState({
    key: "U0hFTEx8NDA4MTcyOTh8Y2FjZjNhNDY5NzU5ZjA4OWM1ZGVhN2E2YTRkMzEyNTczMjljYTU1OTJjNzg1NWQyYjNiMTM4OGM5OTNmZGFjYWFjODkwMDFhMWFkZjYwYzJiZDQyZjZhMjkzNTFiNDgyMWI4MWJlMzhmOWU3ZjA1YzI5ZWM0NTViZGQzNGMzOGM=", // enter your key here
    processRrr: true,
    narration: "",
    firstName: successData?.firstName,
    lastName: successData?.lastName,
    email: successData?.email,
    amount: 3000,
    extendedData: {
      customFields: [
        {
          name: "rrr",
          value: successData?.rrr,
        },
      ],
    },
  });

  const { control, setValue, handleSubmit, reset, watch } =
    useForm<PaymentFormTypes>();

  const selectedBillerId = watch("biller");
  const selectedProductId = watch("product");

  React.useEffect(() => {
    initLoad();
  }, []);

  React.useEffect(() => {
    if (selectedBillerId) getBillerProducts(selectedBillerId);
  }, [selectedBillerId]);

  React.useEffect(() => {
    if (selectedProductId) productChange(selectedProductId);
  }, [selectedProductId]);

  const initLoad = async () => {
    const apiCalls = [getBillers()];
    Promise.all(apiCalls).finally(() => {});
  };

  const getBillers = async () => {
    const billerData: Biller[] = await rrrGeneratorService.getRemitaBillers(
      configData?.stateName
    );
    if (billerData && billerData.length > 0) {
      const billersSelectItemsData: any = billerData.map((x: Biller) => {
        return { label: x.billerName, value: x.billerId };
      });
      setBillers(billerData);
      setBillersSelectItems(billersSelectItemsData);
    }

    setLoading(false);
  };

  const getBillerProducts = async (billerId: string) => {
    setProducts([]);
    setSelectedProduct(new Product(null));
    const billerProductData: BillerProduct =
      await rrrGeneratorService.getBillerProducts(billerId);
    if (billerProductData.billerId) {
      const billerProductsSelectItemsData: any = billerProductData.products.map(
        (x: Product) => {
          return {
            label: x.billPaymentProductName,
            value: x.billPaymentProductId,
          };
        }
      );
      setBillerProduct(billerProductData);
      setProducts(billerProductData.products);
      setBillerProductsSelectItems(billerProductsSelectItemsData);
    }
  };

  const productChange = (productId: string) => {
    setSelectedProduct(new Product(null));
    const selectedProduct = products.find(
      (x) => x.billPaymentProductId === productId
    );

    if (!selectedProduct) return;
    else {
      setSelectedProduct(selectedProduct);
      setValue("currency", selectedProduct.currency);
      setValue("productName", selectedProduct.billPaymentProductName);
      setValue("product", selectedProduct.billPaymentProductId);
      setValue("amount", selectedProduct.amount);
    }
  };

  const getBillerName = (id: string): string => {
    let name: string = "";
    billers.filter((biller) => {
      if (biller.billerId === id) name = biller.billerName;
    });
    return name;
  };

  const onSubmit = async (formData: PaymentFormTypes) => {
    setSuccessData(null);
    setErrorData("");
    setSubmitting(true);
    formData.billerName = getBillerName(formData.biller);

    const dto = {
      stateId: configData?.stateId,
      billerId: formData.biller,
      billerName: getBillerName(formData.biller),
      serviceTypeId: formData.product,
      serviceName: formData.productName,
      payerName: formData.payerName,
      payerEmail: formData.payerEmail,
      payerPhone: formData.payerPhone,
      description: formData.description,
      amount: formData.amount,
    };

    const { ok, data, status, problem }: any =
      await rrrGeneratorService.createPayment(dto);

    if (ok && status === 200) {
      setSelectedProduct(new Product(null));
      reset({
        biller: "",
        billerName: "",
        product: "",
        productName: "",
        payerName: "",
        payerEmail: "",
        payerPhone: "strin",
        description: "",
        amount: 0,
        currency: "",
      });

      setIsGenerated(true);
      setSuccessData({
        rrr: data?.rrr,
        billerName: data?.billerName,
        amount: data?.amount,
        serviceName: data?.serviceName,
        status: data?.status,
        email: dto?.payerEmail,
        firstName: dto.payerName.split(" ")[0],
        lastName: dto.payerName.split(" ")[1],
        naration: dto.description,
      });
    } else if (problem === "CLIENT_ERROR") {
      setErrorData(
        data?.title ||
          data?.errors ||
          data.error ||
          "Unexpected error, Please try again!"
      );
    } else if (!ok && data.error) {
      setErrorData(data?.error);
    } else {
      setErrorData("Unexpected error, Please try again!");
    }

    setSubmitting(false);
  };

  let remitaData = {
    ...paymentData,
    onSuccess: function (response: any) {
      // function callback when payment is successful
      console.log("callback Successful Response", response);
    },
    onError: function (response: any) {
      // function callback when payment fails
      console.log("callback Error Response", response);
    },
    onClose: function () {
      // function callback when payment modal is closed
      console.log("closed");
    },
  };

  return (
    <>
      <Helmet>
        <title>Flopay | Generate RRR</title>
        <meta name="description" content="#" />
      </Helmet>
      <main>
        {/* Generate RRR Form */}
        <section className="login-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="basic-login">
                  {!isgenerated && (
                    <div className="checkbox-form">
                      <h3>Generate RRR</h3>
                      <div className="row">
                        <div className="col-md-12 mb-3">
                          <h6>Search Service</h6>
                        </div>
                        <div className="col-md-12">
                          <FormSelectInput
                            name={"biller"}
                            control={control}
                            label={"Select Biller"}
                            setValue={setValue}
                            options={billersSelectItems}
                            rules={{
                              required: "Please select Biller",
                            }}
                          />
                        </div>

                        {billerProductsSelectItems.length > 0 && (
                          <div className="col-md-12">
                            <FormSelectInput
                              name={"product"}
                              control={control}
                              label={"Select Biller Product"}
                              setValue={setValue}
                              options={billerProductsSelectItems}
                              rules={{
                                required: "Please select Biller Product",
                              }}
                            />
                          </div>
                        )}

                        {selectedProduct.billPaymentProductId && (
                          <>
                            <div className="col-md-12 mb-3">
                              <h6>Payment Details</h6>
                            </div>
                            <div className="col-md-12">
                              <FormInput
                                name={"productName"}
                                control={control}
                                defaultValue={
                                  selectedProduct.billPaymentProductName
                                }
                                label={"Product Name"}
                                disabled={true}
                                placeholder={"Product Name"}
                                isRequired
                                type={"text"}
                                rules={{
                                  required: "Product is required",
                                }}
                              />
                            </div>

                            <div className="col-md-6">
                              <FormInput
                                name={"currency"}
                                control={control}
                                defaultValue={selectedProduct.currency}
                                label={"Currency"}
                                disabled={true}
                                placeholder={"Currency"}
                                isRequired
                                type={"text"}
                                rules={{
                                  required: "Currency is required",
                                }}
                              />
                            </div>

                            <div className="col-md-6">
                              <FormInput
                                name={"amount"}
                                control={control}
                                defaultValue={`${selectedProduct.amount}`}
                                label={"Amount"}
                                disabled={selectedProduct.isAmountFixed}
                                placeholder={"Amount"}
                                isRequired
                                type={"number"}
                                rules={{
                                  required: "Currency is required",
                                }}
                              />
                            </div>
                            <div className="col-md-12">
                              <FormTextArea
                                name={"description"}
                                control={control}
                                label={"Description"}
                                placeholder={"Description"}
                                rules={{}}
                              />
                            </div>
                          </>
                        )}

                        <div className="col-md-12 mb-3">
                          <h6>Payer Details</h6>
                        </div>
                        <div className="col-md-12">
                          <FormInput
                            name={"payerName"}
                            control={control}
                            label={"Payer Name"}
                            placeholder={"Payer Name"}
                            isRequired
                            type={"text"}
                            rules={{
                              required: "Payer Name is required",
                            }}
                          />
                        </div>
                        <div className="col-md-6">
                          <FormInput
                            name={"payerEmail"}
                            control={control}
                            label={"Payer Email"}
                            placeholder={"Payer Email"}
                            isRequired
                            type={"email"}
                            rules={{
                              required: "Payer Email is required",
                              pattern: {
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address",
                              },
                            }}
                          />
                        </div>
                        <div className="col-md-6">
                          <FormInput
                            name={"payerPhone"}
                            control={control}
                            label={"Payer Phone"}
                            placeholder={"Payer Phone"}
                            isRequired
                            type={"number"}
                            rules={{
                              required: "Payer Phone is required",
                            }}
                          />
                        </div>

                        {errorData && (
                          <div className="col-md-12">
                            <div className="alert alert-danger" role="alert">
                              {errorData}
                            </div>
                          </div>
                        )}
                        <div className="order-button-payment mt-20">
                          <FormButton
                            submitting={submitting}
                            onClick={handleSubmit(onSubmit)}
                            label={"Generate RRR"}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {isgenerated && (
                    <div className="">
                      <div className="col-md-12">
                        <h6 className="text-success">
                          {`Payment Successfully Generated`}
                        </h6>
                        <h6 className="text-success">
                          {`${successData?.serviceName} (${successData?.amount})`}
                        </h6>
                        <p className=" font-weight-bold mb-1">
                          Payment Instructions
                        </p>

                        <p
                          style={{ fontSize: "12px", lineHeight: "12px" }}
                          className=""
                        >{`1. You can walk into any Nigeria bank and present your RRR: ${successData?.rrr} to make payment`}</p>
                        <p
                          style={{ fontSize: "12px", lineHeight: "12px" }}
                          className=""
                        >{`2. If you wish to make payment online using various payment channels`}</p>

                        <RemitaPayment
                          remitaData={remitaData}
                          className="btn" // class to style the button
                          text="Pay with Remita" //text to show on button
                          // add a 'live' prop to use the live urls/keys
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default GenerateRrr;
