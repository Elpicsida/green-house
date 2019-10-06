import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from '../app/pages/about/about.component';
import { CommonModule } from '@angular/common';
import { GalleryPageComponent } from 'src/app/pages/gallery/gallery.component';
import { DestinationPageComponent } from 'src/app/pages/destination/destination.component';
import { ReservationsPageComponent } from 'src/app/pages/reservations/reservations.component';


const routes: Routes = [
  { path: 'about', component: AboutPageComponent},
  { path: 'gallery', component: GalleryPageComponent},
  { path: 'destination', component: DestinationPageComponent},
  { path: 'reservations', component: ReservationsPageComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
