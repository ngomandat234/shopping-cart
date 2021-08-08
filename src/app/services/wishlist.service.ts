import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { wishlistUrl } from 'src/config/api';
import { map } from "rxjs/operators"
@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { }
 
  getWishlist() {
    return this.http.get(wishlistUrl).pipe(
      map((result:any)=>{                               
        let productIds:any[]=[]

        result.forEach((items=[])=>productIds.push(items))

        return productIds;
      })
    )
  }

  addToWishlist(productId:any) {
    return this.http.post(wishlistUrl, { id: productId })
  }

  removeFromWishlist(productId:any) {
    return this.http.delete(wishlistUrl + '/' + productId);
  }
}


