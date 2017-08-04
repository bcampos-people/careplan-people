import {Component, OnInit} from '@angular/core';
import {RulesCalendarService} from './rules-calendar.service';
import {CalendarEvent, CalendarDateFormatter} from 'angular-calendar';
import {CustomDateFormatter} from './../providers/custom-date-formatter.provider';
import {subDays, addDays} from 'date-fns';
import 'moment/locale/pt-br';
// import {RoundProgressModule, RoundProgressConfig} from 'angular-svg-round-progressbar';

@Component({
    selector: 'app-rules-calendar',
    templateUrl: './rules-calendar.component.html',
    styleUrls: ['./rules-calendar.component.css'],
    providers: [
        {
            provide: CalendarDateFormatter,
            useClass: CustomDateFormatter
        }
    ]
})
export class RulesCalendarComponent implements OnInit {

    rulesCalendar;

    view:string = 'month';
    locale:string = 'pt';
    showFullCalendar:boolean = false;
    viewDate:Date = new Date();
    startDate:Date = subDays(new Date(), 6);
    endDate:Date = addDays(new Date(), 3);

    events:CalendarEvent[] = [
        {
            start: this.startDate,
            end: this.endDate,
            title: 'Tratamento',
            allDay: true,
            color: {
                primary: '#1e90ff',
                secondary: '#D1E8FF'
            },
        },
        {
            start: this.endDate,
            end: this.endDate,
            title: 'Previsão de alta',
            cssClass: 'event-release-medical',
            allDay: true,
            color: {
                primary: '#1e90ff',
                secondary: '#D1E8FF'
            },
        },
    ];

    constructor(private rulesCalendarService:RulesCalendarService) {
    }

    ngOnInit() {
        this.rulesCalendar = this.rulesCalendarService.getRulesCalendar();
    }

    getEventsClass(events) {
        let classes:string = '';

        if ( events.length > 0 ) {
            for ( let event of events ) {
                if ( event.cssClass ) {
                    classes += ' ' + event.cssClass;
                }
            }
        }

        return classes;
    }

}
