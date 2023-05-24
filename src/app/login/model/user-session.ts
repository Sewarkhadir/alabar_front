import { UserDetails } from "./user-details";

export class UserSession {

  private _userDetails: UserDetails

  constructor(userDetails: UserDetails) {
    this._userDetails = userDetails;
  }

  setCredentials(userCredentials: UserDetails) {
    this._userDetails = userCredentials;
  }

  getCredentials(): UserDetails {
    return this._userDetails;
  }

  resetCredentials(): void {
    this._userDetails = new UserDetails();
  }
}
