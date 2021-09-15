import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpService) { }
   //login user  http service
   loginUser(data: any) {
    //console.log("given data is", data)
    return this.http.loginUser('User', data);
  }
   //login user  http service
   signUpUser(data: any) {
    //console.log("given data is", data)
    return this.http.SignUpUser('User/register', data);
  }
}
