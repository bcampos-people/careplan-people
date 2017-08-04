import {Component, OnInit} from '@angular/core';
import {ActivitiesPlaceService} from './activities-place.service';
import {Activities} from './activities';

import {ActivitiesLightboxComponent} from './../activities-lightbox/activities-lightbox.component';

@Component({
    selector: 'app-activities-place',
    templateUrl: './activities-place.component.html',
    styleUrls: ['./activities-place.component.css']
})
export class ActivitiesPlaceComponent implements OnInit {

    activities;
    selectedActivity: Activities;
    lightboxType: string;
    showLightbox: boolean;

    constructor( private activitiesPlaceService: ActivitiesPlaceService ) {
    }

    ngOnInit() {
        this.activities = this.activitiesPlaceService.getActivitiesPlace();
    }

    showDescription( ac: Activities ) {
        this.lightboxType     = 'description';
        this.selectedActivity = ac;
        this.showLightbox     = true;
    }

    onResetStatus( ac: Activities ) {
        ac.status = '';
    }

    onAlright( ac: Activities ) {
        ac.status = 'done ok';

        this.lightboxType     = 'alright';
        this.selectedActivity = ac;
        this.showLightbox     = true;
    }

    onNonCompliance( ac: Activities ) {
        this.lightboxType     = 'non-compliance';
        this.selectedActivity = ac;
        this.showLightbox     = true;
    }

    onComment( ac: Activities ) {
        this.lightboxType     = 'comment';
        this.selectedActivity = ac;
        this.showLightbox     = true;
    }

    onCloseLightbox( event ) {
        this.showLightbox = false;

        if ( event.closeType == 'non-compliance-comment' ) {
            event.activity.status = 'done wrong';
            console.log( event.comment );
        }

        if ( event.closeType == 'comment' ) {
            event.activity.comments.push( event.comment );
            console.log( event.comment );
        }
    }

    saveComment( ac: Activities, commentType: string, comment: string ) {

    }
}
