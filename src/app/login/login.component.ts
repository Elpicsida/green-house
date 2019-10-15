import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: string;
  public password: string;
  public isErrorMessageDisplayed: boolean;

  constructor(private loginService: LoginService, private _router: Router) { }

  ngOnInit() {
  }

  public async login(): Promise<void> {
    let output = await this.loginService.authenticate(this.user, this.password);
    if (output.loggedIn) {
      this.isErrorMessageDisplayed = false;
      this._router.navigateByUrl('/admin');
    }
    else {
      this.isErrorMessageDisplayed = true;
    }
  }
}
