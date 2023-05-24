import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar'
import { SnackConstants } from 'src/app/constants/snack-constants';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(public snackBar: MatSnackBar) { }

  open(message: string, action: string, config: MatSnackBarConfig<any>) {
    this.snackBar.open(message, action, config);
  }

  serverFailed() {
    this.snackBar.open(SnackConstants.SERVER_FAILED, SnackConstants.OK, {
      duration: 5000
    });
  }

  badCredentials() {
    this.snackBar.open(SnackConstants.BAD_CREDENTIALS, SnackConstants.OK, {
      duration: 5000
    });
  }

  userNotFoundError() {
    this.snackBar.open(SnackConstants.USER_NOT_FOUND, SnackConstants.OK, {
          duration: 5000
        });
  }
}
