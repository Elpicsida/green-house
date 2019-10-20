import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/services/user.service';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  @ViewChild('menuButton', { read: ElementRef, static: false })
  menuButton: ElementRef;

  constructor(public translate: TranslateService, private _adapter: DateAdapter<any>, public user: UserService) {
    this.translate.use('pl');
    this._adapter.setLocale('pl');
  }

  public changeToPolish(): void {
    this.translate.setDefaultLang('pl');
    this.translate.use('pl');
    this._adapter.setLocale('pl');
  }

  public changeToEnglish(): void {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this._adapter.setLocale('en');
  }

  public linkClicked(): void {
    this.menuButton.nativeElement.click();
  }
}
