import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { FormLogin } from '../model/form-login';
import { ResponseCredentials } from '../model/response-credentials';
import { RouteConstants } from 'src/app/constants/route-constants';
import { SnackBarService } from 'src/app/shared/snack-bar/snack-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  public formControl = {
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  }

  constructor(
    public formBilder: FormBuilder,
    public loginService: LoginService,
    public router: Router,
    private snackService: SnackBarService
  ) {
    this.form = this.formBilder.group(this.formControl)
  }

  ngOnInit(): void {
    if (this.loginService.isTokenValid()) {
      this.router.navigate([RouteConstants.MAIN_PAGE.path]);
    }
  }

  login(form: FormLogin) {
    if (form.valid) {
      const email = form ? form.value.email : null;
      const password = form ? form.value.password : null;

      this.loginService.login(email, password).subscribe((res: ResponseCredentials) => {
        if (res) {
          this.loginService.setUserLocalStorage(res);
          this.router.navigate([RouteConstants.MAIN_PAGE.path])
        } else {
          this.snackService.serverFailed();
        }
      },
      (err: any) => {
        if (err.error.status == 403) {
          this.snackService.badCredentials();
        } else if (err.error.status == 401) {
          this.snackService.userNotFoundError();
        } else {
          this.snackService.serverFailed();
        }
      }
      )
  }
}
}
