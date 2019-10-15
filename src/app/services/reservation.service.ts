import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReservationModel } from '../../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private  httpClient: HttpClient) { }

  public async getReservations(): Promise<ReservationModel[]> {
    return this.httpClient.get<ReservationModel[]>("/api/reservations").toPromise();
  }

  public async createReservation(model: ReservationModel): Promise<any> {
    return this.httpClient.post<any>("/api/reservations", model).toPromise();
  }

  public async deleteReservation(id: number): Promise<boolean> { 
    return this.httpClient.delete<boolean>("/api/reservations/" + id).toPromise();
  }
}
