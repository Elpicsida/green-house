import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReservationModel } from '../../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private  httpClient: HttpClient) { }

  public async authenticate(user: string, password: string): Promise<string> {
    return this.httpClient.get<string>("http://localhost:8080/api/login").toPromise();//{ user, pass: password }).toPromise();
  }
}
