import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReservationModel } from 'src/models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private  httpClient: HttpClient) { }

  public async getReservations(): Promise<ReservationModel[]> {
    return this.httpClient.get<ReservationModel[]>("localhost:8080/api/reservations").toPromise();
  }

  public async createReservation(model: ReservationModel): Promise<boolean> {
    return this.httpClient.post<boolean>("localhost:8080/api/reservations", JSON.stringify(model)).toPromise();
  }

  public async deleteReservation(id: number): Promise<boolean> { 
    return this.httpClient.delete<boolean>("localhost:8080/api/reservations/" + id).toPromise();
  }
}
