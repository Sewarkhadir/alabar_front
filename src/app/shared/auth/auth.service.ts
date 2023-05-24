import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserDetails } from 'src/app/login/model/user-details';
import { SessionManagerService } from '../session/session-manager.service';
import { ResponseCredentials } from 'src/app/login/model/response-credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userDetails: UserDetails

  constructor(
    private router: Router,
    private jwtHelper: JwtHelperService,
    private sessionManager: SessionManagerService,
  ) { }

  public getUserDetails(): UserDetails {
    return this.userDetails;
  }

  public isTokenValid(): boolean {
    let userDetails: UserDetails = this.getUserDetailsOrExtractFromLocalStorage();
    if (userDetails == null) return false;

    return this.checkIsTokenValid(userDetails.accessToken);
  }

  public getUserDetailsOrExtractFromLocalStorage(): UserDetails {
    if (this.userDetails == null) {
      this.userDetails = this.sessionManager.getCredentials();
    }
    return this.userDetails;
  }

  private checkIsTokenValid(token: string): boolean {
    return this.jwtHelper.isTokenExpired(token) == false;
  }

  public logout(): void {
    this.userDetails = null;
    this.sessionManager.clearCredentials();
    this.router.navigate(['/login']);
  }

  public setCredentials(responseCredentials: ResponseCredentials): void {
    let userDetails: UserDetails = {
      accessToken: responseCredentials.accessToken,
      refreshToken: responseCredentials.refreshToken,
      expireTime: responseCredentials.expireTime,
      userData: this.jwtHelper.decodeToken(responseCredentials.accessToken)
    }

    this.userDetails = userDetails;
    this.sessionManager.setCredentials(this.userDetails);
  }

}
