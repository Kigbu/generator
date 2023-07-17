import Product from "./product.model";

export default class BillerProduct {
  billerId!: string;
  categoryId!: string;
  products!: Product[];

  constructor(dto: any = null) {
    if (dto) {
      this.billerId = dto.billerId;
      this.categoryId = dto.categoryId;
      this.products =
        dto.products && dto.products.length > 0
          ? dto.products.map((x: any) => new Product(x))
          : [];
    }
  }
}
