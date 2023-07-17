import BillerProduct from "../models/biller-product.model";
import Biller from "../models/biller.model";
import ConfigData from "../models/config-data.model";
import TransactionStatus from "../models/transaction-status.model";
import apiClient from "./api-client";

const ENDPOINT = "/api/RrrGenerator";

const getRemitaBillers = async (stateName: string): Promise<Biller[]> => {
  const { ok, data }: any = await apiClient.get(`${ENDPOINT}/RemitaBillers?stateName=${stateName}`);
  let items: Biller[] = [];
  if (ok && data) {
    items = data.data.map((x: any) => new Biller(x));
  }
  return items;
};

const getBillerProducts = async (id: string): Promise<BillerProduct> => {
  const { ok, data, status }: any = await apiClient.get(
    `${ENDPOINT}/RemitaBillerProducts?billerId=${id}`
  );
  if (ok && data && status === 200) return new BillerProduct(data.data);
  else return new BillerProduct(null);
};

const createPayment = async (dto: any) => {
  return apiClient.post(`${ENDPOINT}/create`, dto);
};

const getConfigData = async (stateCode: string): Promise<ConfigData> => {
  const { ok, data }: any = await apiClient.get(`${ENDPOINT}/ConfigByState?stateCode=${stateCode}`);
  if (ok && data) return new ConfigData(data);
  else return new ConfigData(null);
};

const checkTransactionStatus = async (rrr: string): Promise<TransactionStatus> => {
  const { ok, data }: any = await apiClient.get(`${ENDPOINT}/CheckTransactionStatus?rrr=${rrr}`);
  if (ok && data) return new TransactionStatus(data);
  else return new TransactionStatus(null);
};


const rrrGeneratorService = {
  getRemitaBillers,
  getBillerProducts,
  createPayment,
  getConfigData,
  checkTransactionStatus
};

export default rrrGeneratorService;
