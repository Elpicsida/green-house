import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FooterColumnComponent } from './footer/footer-column/footer-column.component';
import { FooterMainComponent } from './footer/footer-main/footer-main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutPageComponent } from './pages/about/about.component';
import { GalleryPageComponent } from './pages/gallery/gallery.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatTabsModule, MatSidenavModule, MatToolbarModule,MatIconModule, MatButtonModule  } from '@angular/material';
import { HeaderMainComponent } from './header/header-main/header-main.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { ContentMainComponent } from './content/content-main/content-main.component';
import { IconComponent } from './icon/icon.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';

import { NgxGalleryModule } from 'ngx-gallery';
import { DestinationPageComponent } from './pages/destination/destination.component';
import {MatDatepickerModule } from '@angular/material';
import  { MatMomentDateModule } from '@angular/material-moment-adapter';
import { ReservationsPageComponent } from './pages/reservations/reservations.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    FooterMainComponent,
    FooterColumnComponent,
    AboutPageComponent,
    GalleryPageComponent,
    GalleryComponent,
    HeaderMainComponent,
    MainNavComponent,
    ContentMainComponent,
    IconComponent,
    DestinationPageComponent,
    ReservationsPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    LayoutModule,
    MatListModule,
    HttpClientModule,
    NgxGalleryModule,
    MatDatepickerModule, 
    MatMomentDateModule,
    MatMenuModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
