import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: string;
  public password: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  public async login(): Promise<void> {
    await this.loginService.authenticate(this.user, this.password);
  }
}
