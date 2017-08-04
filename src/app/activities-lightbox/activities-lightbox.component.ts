import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Activities } from './../activities-place/activities';

@Component({
    selector: 'app-activities-lightbox',
    templateUrl: './activities-lightbox.component.html',
    styleUrls: ['./activities-lightbox.component.css']
})

export class ActivitiesLightboxComponent {
    private textareaValue: string = '';

    @Input() type: string;
    @Input() activity: Activities;
    @Input() visible: boolean;

    @Output() close: EventEmitter<any> = new EventEmitter();

    constructor(private sanitizer: DomSanitizer) {
        this.sanitizer = sanitizer;
    }

    doTextareaValueChange(ev) {
        try {
            this.textareaValue = ev.target.value;
        } catch(e) {
            console.info('could not set textarea-value');
        }
    }

    videoUrl() {
        return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.activity.videoYoutubeId);
    }

    getPhoto() {
        return 'http://via.placeholder.com/120x120';
    }

    getUserName() {
        return 'Fábio';
    }

    closeLightbox( closeType: string = null, ac: Activities = null ): void {
        this.close.emit( {
            event: event,
            closeType: closeType,
            activity: ac,
            comment: this.textareaValue
        } );

        this.textareaValue = '';
    }
}