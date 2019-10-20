import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FooterMainComponent } from './footer/footer-main/footer-main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutPageComponent } from './pages/about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatTabsModule, MatSidenavModule, MatToolbarModule, MatButtonModule, MatSnackBarModule } from '@angular/material';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field'
import { ContentMainComponent } from './content/content-main/content-main.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input'
import { NgxGalleryModule } from 'ngx-gallery';
import { DestinationPageComponent } from './pages/destination/destination.component';
import {MatDatepickerModule } from '@angular/material';
import  { MatMomentDateModule } from '@angular/material-moment-adapter';
import { ReservationsPageComponent } from './pages/reservations/reservations.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { GalleryAdminComponent } from './admin/gallery-admin/gallery-admin.component';
import { ReservationsAdminComponent } from './admin/reservations-admin/reservations-admin.component';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MomentUtcDateAdapter } from './adapters/moment-utc-date-adapter';
import { GalleryAdminViewComponent } from './admin/gallery-admin-view/gallery-admin-view.component';
import { QuestionComponent } from './pages/question/question.component';
import { UserService } from 'src/app/services/user.service';
import { NotFoundComponent } from './content/not-found/not-found.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

export class CustomHammerConfig extends HammerGestureConfig  {
  overrides = {
      pinch: { enable: false },
      rotate: { enable: false }
  };
}

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    FooterMainComponent,
    AboutPageComponent,
    GalleryComponent,
    MainNavComponent,
    ContentMainComponent,
    DestinationPageComponent,
    ReservationsPageComponent,
    AdminComponent,
    LoginComponent,
    GalleryAdminComponent,
    ReservationsAdminComponent,
    GalleryAdminViewComponent,
    QuestionComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    LayoutModule,
    MatListModule,
    HttpClientModule,
    NgxGalleryModule,
    MatDatepickerModule, 
    MatMomentDateModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  entryComponents: [GalleryAdminViewComponent],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig },
    {provide: DateAdapter, useClass: MomentUtcDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    UserService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
