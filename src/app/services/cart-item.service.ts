import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { CartItem } from '../model/cart-item';
import { cartURL } from 'src/config/api';
import { map } from "rxjs/operators"
@Injectable({
  providedIn: 'root'
})
export class CartItemService {
  product:Product[]=[]
  constructor(private http: HttpClient) { }
  getCartItems(): Observable<CartItem[]> {
    //TODO: Mapping the obtained result to our CartItem props. (pipe() and map())
    return this.http.get<CartItem[]>(cartURL).pipe(
      map((result: any[]) => {
        let cartItems: CartItem[] = [];

        for (let item of result) {
          let productExists = false

       for (let i in cartItems) {
        if (cartItems[i].productId === item.productId) {
              cartItems[i].qty++
              productExists = true
              break;
            }
          }

          if (!productExists) {
            cartItems.push(new CartItem(item.id,item.productName,item.productID,item.qty,item.productPrice));}
        }
        return cartItems;
      })
    );                                                  
  }

  addProductToCart(product: Product): Observable<any> {
    return this.http.post(cartURL, { product });
  }
}