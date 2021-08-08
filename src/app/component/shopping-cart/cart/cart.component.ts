import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';
import { Product } from 'src/app/model/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartItemService } from 'src/app/services/cart-item.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // cartItems = [
  //   // {qty:1,price:2},
  //   // {qty:2,price:3}
  // ];
cartItems :any[] = [];
  pro:Product[]=[]
  cartTotal = 0

  constructor(
    private msg: MessengerService,
    private cartService: CartItemService
  ) { }

  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription() {
    this.msg.getMsg().subscribe((product:any) => {
      this.pro = product;
      this.loadCartItems();
    })
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
    //  this.calcCartTotal();
    })
  }

  addProductToCart(product:Product ){
    let productExists = false

     for (let i in this.cartItems) {
      if (this.cartItems[i].productId === product.id) {
            this.cartItems[i].qty++
            productExists = true
            break;
          }
        }

        if (!productExists) {
          this.cartItems.push({
            productId: product.id,
            productName:product.name,
            qty:1,
            price:product.price        
            })
      }
      this.calcCartTotal()
  }
  calcCartTotal() {
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  } 
}