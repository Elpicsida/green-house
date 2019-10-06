import { Component, OnInit, ViewChild, Input, ViewEncapsulation } from '@angular/core';
import { Moment } from 'moment';
import { MatCalendar } from '@angular/material';

import * as moment from "moment";

@Component({
  selector: 'reservations-page',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReservationsPageComponent implements OnInit {

  @ViewChild('calendar', null)
  calendar: MatCalendar<Moment>;
  selectedDate: Moment;

  private someDateArray: Moment[];
  
  constructor() { 
    
  }

  ngOnInit() {
    const today= moment();
    const tomorrow = moment().add(1, 'd');
    const twoDaysAgo = moment().add(-2, 'd');
    this.someDateArray = [
      tomorrow,
      twoDaysAgo
    ];
    this._setupClassFunction();
  }

  public dateClass: (d: Moment) => any;

  private _setupClassFunction() {
    this.dateClass = (d: Moment) => {
      let selected = false;

      if (this.someDateArray) {
        selected = this.someDateArray.some((item: Moment) => 
        item.isSame(d, 'year') &&
        item.isSame(d, 'month') &&
        item.isSame(d, 'day'))
          // item.year() === d.year() 
          // && item.date() === d.date() 
          // && item.month() === d.month());
      }

      return selected ? 'day-reserved' : undefined;
    }
  }
}
