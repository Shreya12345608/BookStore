import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpService) { }
 
  getCarts(url: any) {
    console.log("given data is", url);
    return this.http.getCarts(url);
  }
  addToCart(data:any){
    return this.http.addToCart("Cart", data);
  }
}
