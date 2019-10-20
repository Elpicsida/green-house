import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'admin-page',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  constructor(private loginService: LoginService, private userService: UserService) { }

  public async logout(): Promise<void> {
    await this.loginService.logout();
    this.userService.loggedIn = false;
  }
}
