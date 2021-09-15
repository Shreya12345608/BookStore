import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GetAllBookComponent } from './component/get-all-book/get-all-book.component';
import { LoginSignupComponent } from './component/login-signup/login-signup.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  {path: '',component: LoginSignupComponent,
  children: [
    { path: 'register', component: SignupComponent },
    { path: 'login', component: LoginComponent }
  ],},
  {path: 'dashboard', component:DashboardComponent,
  children: [
    { path: 'books', component: GetAllBookComponent }
  ],},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
