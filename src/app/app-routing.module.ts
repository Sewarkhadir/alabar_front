import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { RouteConstants } from './constants/route-constants';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: RouteConstants.LOGIN_PAGE.path, component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
