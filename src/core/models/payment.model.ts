export default class Payment {
  stateId!: number;
  billerId!: string;
  billerName!: string;
  serviceTypeId!: string
  serviceName!: string;
  payerName!: string;
  payerEmail!: string;
  payerPhone!: string;
  description!: string;
  amount!: number;

  constructor(dto: any) {
    if (dto) {
      this.stateId = dto.stateId
      this.billerId = dto.billerId
      this.billerName = dto.billerName
      this.serviceTypeId = dto.serviceTypeId
      this.serviceName = dto.serviceName
      this.payerName = dto.payerName
      this.payerEmail = dto.payerEmail
      this.payerPhone = dto.payerPhone
      this.description = dto.description
      this.amount = dto.amount
    }
  }
}