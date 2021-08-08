import { Product } from './product';

export class CartItem {
  id: number;
  productId: number;
  productName: string;
  qty: number;
  price: number;

  constructor(id: number, productName:string,productID:number, qty = 1,productPrice:number) {
    this.id = id;
    this.productId = productID;
    this.productName = productName;
    this.price = productPrice;
    this.qty = qty;
  }
}