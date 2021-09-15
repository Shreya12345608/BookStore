import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginSignupComponent } from './component/login-signup/login-signup.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  {path: 'home',component: LoginSignupComponent,
  children: [
    { path: 'register', component: SignupComponent },
    { path: 'login', component: LoginComponent }
  ],},
  {path: 'dashboard', component:DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
