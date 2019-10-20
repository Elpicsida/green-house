import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from '../app/pages/about/about.component';
import { DestinationPageComponent } from 'src/app/pages/destination/destination.component';
import { ReservationsPageComponent } from 'src/app/pages/reservations/reservations.component';
import { AdminComponent } from 'src/app/admin/admin.component';
import { GalleryAdminComponent } from 'src/app/admin/gallery-admin/gallery-admin.component';
import { ReservationsAdminComponent } from 'src/app/admin/reservations-admin/reservations-admin.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { QuestionComponent } from './pages/question/question.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  { path: 'about', component: AboutPageComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'destination', component: DestinationPageComponent},
  { path: 'reservations', component: ReservationsPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardService] },
  { path: 'admin/gallery', component: GalleryAdminComponent, canActivate: [AuthGuardService] },
  { path: 'admin/reservations', component: ReservationsAdminComponent, canActivate: [AuthGuardService] },
  { path: '', redirectTo: '/about', pathMatch: 'full' }
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class AppRoutingModule { }
