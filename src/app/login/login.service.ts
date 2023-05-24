import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../shared/auth/auth.service';
import { ResponseCredentials } from './model/response-credentials';
import { environmentPath } from '../constants/services';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  dialogTriggerLogout = new BehaviorSubject(false);

  constructor(private http: HttpClient, private authService: AuthService) { }

  logout() {
    this.authService.logout();
  }

  openLogoutDialog() {
    this.dialogTriggerLogout.next(true);
  }

  login(email: string, password: string): Observable<ResponseCredentials> {
    return this.http.post<ResponseCredentials>(environmentPath.loginPath, {
      email, password
    });
  }

  public isTokenValid(): boolean {
    return this.authService.isTokenValid();
  }

  setUserLocalStorage(responseCredentials: ResponseCredentials) {
    this.authService.setCredentials(responseCredentials)
  }

}
