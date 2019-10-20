import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';

import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import {default as _rollupMoment} from 'moment';
import { ReservationModel } from 'src/models/reservation.model';

const moment = _rollupMoment || _moment;

@Component({
  selector: 'app-reservations-admin',
  templateUrl: './reservations-admin.component.html',
  styleUrls: ['./reservations-admin.component.scss']
})
export class ReservationsAdminComponent implements OnInit {

  public reservationItems: ReservationModel[] = [];
  public isNewItemCreating: boolean;
  public errorMessage: string = '';

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
    // this.reservationService.getReservations().then((items : ReservationModel[]) => {
    //     this.reservationItems = items;
    // });
  }

  public async saveChanges(): Promise<void> {
    var el = this.reservationItems.filter(x => x.Id === -1)[0];
    if (!el.DateFrom || !el.DateTo) {
      this.errorMessage = 'Obie daty powinny zostać wypełnione';
      return;
    }
    
    if (el.DateFrom > el.DateTo) {
      this.errorMessage = 'Druga data powinna być późniejsza niż pierwsza';
      return;
    }
    this.isNewItemCreating = false;
    var result = await this.reservationService.createReservation(el);
    el.Id = result.Id;
  }

  public addNewItem(): void {
    this.reservationItems.unshift({Id: -1, DateFrom: moment(), DateTo: moment()});
    this.isNewItemCreating = true;
  }

  public deleteItem(index: number): void {
    let reservation = this.reservationItems.splice(index, 1)[0];
    this.reservationService.deleteReservation(reservation.Id);
  }

  public getDatesBetween(startDate: _moment.Moment, endDate: _moment.Moment): Array<_moment.Moment> {
    var dateArray = new Array();
    var currentDate = moment(startDate);
    
    while (!currentDate.isAfter(endDate)) {
        dateArray.push(moment(currentDate));
        currentDate.add('days', 1);
        
    }
    return dateArray;
  }

  public clearError(): void {
    this.errorMessage = '';
  }

}
