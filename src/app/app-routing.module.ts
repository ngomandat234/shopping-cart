import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { PageNotFoundComponent } from './component/register/page-not-found/page-not-found.component';
import { RegisterComponent } from './component/register/register.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path:"shop",component:ShoppingCartComponent},
  {path:'logIn', component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"**",component:PageNotFoundComponent},
  {path:"",redirectTo:"/shop",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
