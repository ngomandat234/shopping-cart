import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartItemService } from 'src/app/services/cart-item.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { ProductService } from 'src/app/services/product.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { ProductListComponent } from '../product-list.component';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input()  productItem !: Product;    
  @Input() cWL:boolean=false;                  
  constructor(private ms:MessengerService, private cs:CartItemService, private ws:WishlistService) { }
 
  ngOnInit(): void {
  }
  handleAddToCart()
  { 
    this.cs.addProductToCart(this.productItem).subscribe(()=>{
      this.ms.sendMsg(this.productItem)
    })
   
   
  }
  detail()
  {
    
  }
  handleAddToWishlist() {
    this.ws.addToWishlist(this.productItem.id).subscribe(() => {
      this.cWL = true;   
    })
  }

  handleRemoveFromWishlist() {
    this.ws.removeFromWishlist(this.productItem.id).subscribe(() => {
      this.cWL = false;
    })
  }

}
  