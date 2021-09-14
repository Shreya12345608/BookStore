import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {

  signupShown:boolean = true;

  constructor( private router:Router,
    private acRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  showSignup(){
    this.signupShown = true;
    this.router.navigate(['register'],{relativeTo:this.acRoute});
  }
  showLogin(){
    this.signupShown = false;
    this.router.navigate(['login'],{relativeTo:this.acRoute});
  }
}