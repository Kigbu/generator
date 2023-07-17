export default class TransactionStatus {
  amount!: number;
  rrr!: string;
  orderId!: string;
  message!: string;
  transactionTime!: string;
  status!: string;

  constructor(dto: any = null) {
    if (dto) {
      this.amount = dto.amount
      this.rrr = dto.rrr
      this.orderId = dto.orderId
      this.message = dto.message
      this.transactionTime = dto.transactionTime
      this.status = dto.status
    }
  }
}