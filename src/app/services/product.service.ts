import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { productURL } from 'src/config/api';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // product : Product[]=[
  //   new Product(1,"a","b",1),
  //   new Product(2,"c","d ",22)

  // ]
  constructor(private http:HttpClient) { }
  getProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(productURL)
  }
}
