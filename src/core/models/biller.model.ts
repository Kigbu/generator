export default class Biller {
  billerId!: string;
  billerName!: string;
  billerShortName!: string;
  billerLogoUrl!: string;
  categoryId!: string;
  categoryName!: string;
  categoryDescription!: string;

  constructor(dto: any = null) {
    if (dto) {
      this.billerId = dto.billerId;
      this.billerName = dto.billerName;
      this.billerShortName = dto.billerShortName;
      this.billerLogoUrl = dto.billerLogoUrl;
      this.categoryId = dto.categoryId;
      this.categoryName = dto.categoryName;
      this.categoryDescription = dto.categoryDescription;
    }

  }
}
