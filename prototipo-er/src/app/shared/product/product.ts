import { Base } from '../base-model/base';

export class Product extends Base {
  title: string;
  description: string;
  price: number;
  quantityAvailable: number;
  sold: number;
  earnedMoney: number[];
  imgUrl: string;
}

export class ProductSales extends Product {
  priceOff: number;
}
