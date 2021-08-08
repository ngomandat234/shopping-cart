import { environment } from "src/environments/environment";
 export const baseURL = environment.production? "https//api.shoppingcart.com" : "http://localhost:3000"
 export const productURL = baseURL + "/products"
 export const cartURL = baseURL + "/cart"
 export const wishlistUrl = baseURL +"/wishlist"