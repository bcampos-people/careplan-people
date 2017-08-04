import { IssuesComponent } from './careplan/issues/issues.component';
import { CustomHttp } from './custom-http';
import { Http, HttpModule, ConnectionBackend, RequestOptions, XHRBackend } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { AlertsScopeComponent } from './alerts-scope/alerts-scope.component';
import { AjustFontComponent } from './ajust-font/ajust-font.component';
import { RulesCalendarComponent } from './rules-calendar/rules-calendar.component';
import { TaskStatusComponent } from './task-status/task-status.component';
import { ActivitiesPlaceComponent } from './activities-place/activities-place.component';
import { ActivitiesLightboxComponent } from './activities-lightbox/activities-lightbox.component';

import { RulesCalendarService } from './rules-calendar/rules-calendar.service';
import { ActivitiesPlaceService } from './activities-place/activities-place.service';

import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { ProgressbarModule } from 'ngx-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';

const appRoutes: Routes = [
    {
        path: 'careplan',
        component: CareplanComponent
    },
    {
        path: 'issues',
        component: IssuesComponent
    },
    {
        path: 'nocareplan',
        component: NocareplanComponent
    },
];

@NgModule({
    declarations: [
        AppComponent,
        IssuesComponent,
        NocareplanComponent
        GreetingComponent,
        AlertsScopeComponent,
        AjustFontComponent,
        RulesCalendarComponent,
        TaskStatusComponent,
        ActivitiesPlaceComponent,
        ActivitiesLightboxComponent
    ],
    imports: [
        BrowserModule,
        RoundProgressModule,
        BrowserAnimationsModule,
        ProgressbarModule.forRoot(),
        CalendarModule.forRoot(),
        RouterModule.forRoot(appRoutes, { enableTracing: true }),
        HttpModule
    ],
    providers: [{
        provide: Http,
        RulesCalendarService,
        ActivitiesPlaceService
        useFactory: gwtCustomHttp,
        deps: [XHRBackend, RequestOptions]
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
