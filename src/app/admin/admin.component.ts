import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'admin-page',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private loginService: LoginService, private userService: UserService) { }

  ngOnInit() {
  }

  public async logout(): Promise<void> {
    await this.loginService.logout();
    this.userService.loggedIn = false;
  }
}
