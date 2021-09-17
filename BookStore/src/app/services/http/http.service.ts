import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BaseUrl = environment.LOGIN_URL;
  https = new HttpHeaders();

  constructor(private http: HttpClient) { }


  loginUser(url: any, data: any) {

    return this.http.post(this.BaseUrl + url, data);
  }

  SignUpUser(url: any, data: any) {
    return this.http.post(this.BaseUrl + url, data);
  }

  getallBook(url:any){
    return this.http.get(this.BaseUrl + url);
  }

  getCarts(url:any){
    let token = localStorage.getItem('Token');
    let options = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token,
        'Content-Type': 'application/json'
      })
    }
    return this.http.get(this.BaseUrl + url, options);
  }
 
  addToCart(url: any, data: any) {
    let token = localStorage.getItem('Token');
    let options = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token,
        'Content-Type': 'application/json'
      })
    }
    return this.http.post(this.BaseUrl + url, data, options);
  }
}
