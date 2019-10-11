import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import {default as _rollupMoment} from 'moment';

const moment = _rollupMoment || _moment;

export class ReservationModel {
    public Id: number;
    public DateFrom: _moment.Moment;
    public DateTo: _moment.Moment;
}