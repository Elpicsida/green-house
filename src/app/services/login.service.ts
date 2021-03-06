import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReservationModel } from '../../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private  httpClient: HttpClient) { }

  public async authenticate(user: string, password: string): Promise<{ loggedIn: boolean}> {
    return this.httpClient.post<{ loggedIn: boolean}>("/api/login", { user, pass: password}).toPromise();
  }

  public validate(): Observable<boolean> {
    return this.httpClient.post<boolean>("/api/validate", {});
  }

  public logout(): Promise<void> {
    return this.httpClient.post<void>("api/logout", {}).toPromise();
  }
}
