export default class Product {
  billPaymentProductId!: string;
  billPaymentProductName!: string;
  isAmountFixed!: boolean;
  amount!: number;
  currency!: string

  constructor(dto: any) {
    if (dto) {
      this.billPaymentProductId = dto.billPaymentProductId
      this.billPaymentProductName = dto.billPaymentProductName
      this.isAmountFixed = dto.isAmountFixed
      this.amount = dto.amount
      this.currency = dto.currency
    }
  }

}