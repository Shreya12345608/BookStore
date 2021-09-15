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
}

