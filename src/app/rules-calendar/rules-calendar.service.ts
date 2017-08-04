import { Injectable } from '@angular/core';
import { RulesCalendar } from './rules-calendar';

let rulesCalendar: RulesCalendar[] = [
  { id: 1, type: 'before', plan: 'with-plan', day: '28', month: 'jun', percent: 100 },
  { id: 2, type: 'before', plan: 'with-plan', day: '29', month: 'jun', percent: 75 },
  { id: 3, type: 'before', plan: 'with-plan', day: '30', month: 'jun', percent: 30 },
  { id: 4, type: 'before', plan: 'with-plan', day: '1', month: 'jul', percent: 15 },
  { id: 5, type: 'before', plan: 'with-plan', day: '2', month: 'jul', percent: 78 },
  { id: 6, type: 'today', plan: 'with-plan', day: '3', month: 'jul', percent: 0 },
  { id: 7, type: 'after', plan: 'with-plan', day: '4', month: 'jul', percent: 0 },
  { id: 8, type: 'after', plan: 'with-plan', day: '5', month: 'jul', percent: 0 },
  { id: 9, type: 'after', plan: 'with-plan', day: '6', month: 'jul', percent: 0 },
  { id: 10, type: 'release-medical', plan: 'with-plan', day: '7', month: 'jul', percent: 0 },
  { id: 11, type: 'after', plan: 'without-plan', day: '8', month: 'jul', percent: 0 },
];

@Injectable()
export class RulesCalendarService {

  constructor() { }

  getRulesCalendar() {
    return rulesCalendar;
  }

}
