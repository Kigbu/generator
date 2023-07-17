import React from "react";
import { Helmet } from "react-helmet";
import FormInput from "../../components/Form/FormInput/FormInput";
import { useForm } from "react-hook-form";
import rrrGeneratorService from "../../core/service/rrr-generator.service";
import TransactionStatus from "../../core/models/transaction-status.model";
import FormButton from "../../components/Form/FormButton/FormButton";

const PaymentStatus = () => {
  const [submitting, setSubmitting] = React.useState<boolean>(false);
  const [transactionStatus, setTransactionStatus] =
    React.useState<TransactionStatus>();
  const { control, handleSubmit } = useForm();

  const checkStatus = async (formData: any) => {
    setSubmitting(true);
    const statusData: any = await rrrGeneratorService.checkTransactionStatus(
      formData.rrr
    );

    if (statusData) {
      setTransactionStatus(statusData);
    }
    setSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Flopay | Check Payment Status</title>
        <meta name="description" content="#" />
      </Helmet>
      <main>
        <section className="login-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="basic-login">
                  <div className="checkbox-form">
                    <h3>Check Payment Status</h3>
                    <div className="row">
                      <div className="col-md-12">
                        <FormInput
                          name={"rrr"}
                          control={control}
                          label={"Enter RRR"}
                          placeholder={"Enter RRR"}
                          isRequired
                          type={"text"}
                          rules={{
                            required: "RRR is required",
                          }}
                        />
                      </div>

                      <div className="order-button-payment mt-20">
                        <FormButton
                          submitting={submitting}
                          onClick={handleSubmit(checkStatus)}
                          label={"Generate RRR"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PaymentStatus;
