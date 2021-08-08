import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';
import { WishlistService } from 'src/app/services/wishlist.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = []
  wishlist: number[] = []
  constructor(private ps: ProductService, private ws: WishlistService) { }

  ngOnInit() {
    this.loadProducts();
    this.loadWishlist();
  }

  loadProducts() {
    this.ps.getProduct().subscribe((products) => {
      this.productList = products;
    })
  }

  loadWishlist() {
    this.ws.getWishlist().subscribe((productIds) => {
      this.wishlist = productIds
      console.log(productIds)
    })
  }
}