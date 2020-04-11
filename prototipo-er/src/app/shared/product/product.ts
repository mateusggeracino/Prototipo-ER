import { Base } from '../base-model/base';

export class Product extends Base {
  title: string;
  description: string;
  price: number;
  imgUrl: string;
}

export class ProductSales extends Product {
  priceOff: number;
}
