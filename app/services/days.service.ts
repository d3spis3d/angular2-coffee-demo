import {Injectable} from 'angular2/core';

import {DAYS} from '../data/mock-days';

@Injectable()
export class DaysService {
  getDays() {
    return DAYS;
  }
}
