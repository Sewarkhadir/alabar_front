import { Injectable } from '@angular/core';
import { environment } from 'src/app/environment';
import { UserDetails } from 'src/app/login/model/user-details';
import { UserSession } from 'src/app/login/model/user-session';

@Injectable({
  providedIn: 'root'
})
export class SessionManagerService {

  private readonly _sessionStorageKey: string = "userDetails";
  private _userSession: UserSession;

  constructor() {
    this._userSession = this.loadSavedCredentials();
  }

  getCredentials(): UserDetails {
    return this._userSession.getCredentials();
  }

  setCredentials(userCredentials: UserDetails) {
    this._userSession.setCredentials(userCredentials);
    this.saveCredentials();
  }

  clearCredentials() {
    sessionStorage.removeItem(this._sessionStorageKey);
    this._userSession.resetCredentials();
  }

  private loadSavedCredentials(): UserSession {
    let stringStored = sessionStorage.getItem(this._sessionStorageKey);
    if (stringStored) {
      let stringDecoded = "";
      if (environment.production) {
        stringDecoded = atob(stringStored);
      } else {
        stringDecoded = stringStored;
      }
      let userDetails = JSON.parse(stringDecoded);
      return new UserSession(userDetails);
    }
    return new UserSession(null);
  }

  private saveCredentials() {
    if (environment.production) {
      sessionStorage.setItem(this._sessionStorageKey, btoa(JSON.stringify(this._userSession.getCredentials())));
    } else {
      sessionStorage.setItem(this._sessionStorageKey, JSON.stringify(this._userSession.getCredentials()));
    }
  }
}
