import { Component, ElementRef, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  @ViewChild('menuButton', { read: ElementRef, static: false })
  menuButton: ElementRef;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public translate: TranslateService) {
    this.translate.use('pl');
  }

  public changeToPolish(): void {
    this.translate.setDefaultLang('en');
    this.translate.use('pl');
  }

  public changeToEnglish(): void {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  public linkClicked(): void {
    this.menuButton.nativeElement.click();
  }
}
