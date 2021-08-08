import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponent } from './component/shared/shared.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { NavComponent } from './component/shared/nav/nav.component';
import { FiltersComponent } from './component/shopping-cart/filters/filters.component';
import { ProductListComponent } from './component/shopping-cart/product-list/product-list.component';
import { CartComponent } from './component/shopping-cart/cart/cart.component';
import { CartItemComponent } from './component/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './component/shopping-cart/product-list/product-item/product-item.component';
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { PageNotFoundComponent } from './component/register/page-not-found/page-not-found.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    ShoppingCartComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
