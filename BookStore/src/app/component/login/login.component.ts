import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarModule } from '@angular/material/snack-bar';
import { UserServiceService } from 'src/app/services/user-service.service';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  submitted: boolean = false;
  loginForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder,
    private user:UserServiceService,
    private snackBar:MatSnackBar,
    private router:Router,
    private route:ActivatedRoute) { }

    ///for oepn snackbar
    openSnackBar(message: string, duration: number) {
      let config = new MatSnackBarConfig();
      if (duration != 0)
      {
        config.duration = duration; 
      }
      this.snackBar.open(message, undefined, config);
    } 

    
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  
 
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }

  let requestData = {
    userEmail: this.loginForm.value.email,
    Password: this.loginForm.value.password
  }
 
  this.user.loginUser(requestData).subscribe(
    (response: any) => {
      console.log(requestData);
      this.openSnackBar('Login success', 2000);
      this.router.navigate(['dashboard']);
      console.log(response);
  })    
  }
}
