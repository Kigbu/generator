export default class ConfigData {
  splitRrrConfigId!: number;
  stateId!: number;
  logoUrl!: string;
  brandName!: string;
  heroTitle!: string;
  stateName!: string;
  stateCode!: string;

  constructor(dto: any = null) {
    if (dto) {
      this.splitRrrConfigId = dto.splitRrrConfigId
      this.stateId = dto.stateId
      this.logoUrl = dto.logoUrl
      this.brandName = dto.brandName
      this.heroTitle = dto.heroTitle
      this.stateName = dto.stateName
      this.stateCode = dto.stateCode
    }
  }
}