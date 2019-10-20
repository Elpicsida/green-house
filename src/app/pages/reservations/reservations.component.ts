import { Component, ViewChild, Input, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { Moment } from 'moment';
import { MatCalendar } from '@angular/material';

import * as moment from "moment";
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'reservations-page',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReservationsPageComponent {
  
  @ViewChild('calendar', null)
  calendar: MatCalendar<Moment>;
  selectedDate: Moment;

  private dateArray: Moment[];
  
  constructor(private reservationService: ReservationService, private cd: ChangeDetectorRef) { 
    this.reservationService.getReservations().then(items => {
      var arr = [];
      for(var i = 0 ; i < items.length; i++) {
        arr = arr.concat(this.getDatesBetween(items[i].DateFrom, items[i].DateTo));
      }
      this.dateArray = arr;
      this._setupClassFunction();
      this.cd.detectChanges();
      this.calendar.updateTodaysDate();
    });
  }

  public dateClass: (d: Moment) => any;

  private _setupClassFunction() {
    this.dateClass = (d: Moment) => {
      let selected = false;

      if (this.dateArray) {
        selected = this.dateArray.some((item: Moment) => 
        item.isSame(d, 'year') &&
        item.isSame(d, 'month') &&
        item.isSame(d, 'day'))
      }

      return selected ? 'day-reserved' : undefined;
    }
  }

  private getDatesBetween(startDate: Moment, endDate: Moment): Array<Moment> {
    var dateArray = new Array();
    var currentDate = moment(startDate);
    
    while (!currentDate.isAfter(endDate)) {
        dateArray.push(moment(currentDate));
        currentDate.add(1, 'days');
        
    }
    return dateArray;
  }
}
