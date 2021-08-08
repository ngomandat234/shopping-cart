import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  product=new Subject()

  constructor( ) { }
  sendMsg(product:any)
  {
   return this.product.next(product)
  }
  getMsg(){
    return this.product.asObservable();
  }
}
