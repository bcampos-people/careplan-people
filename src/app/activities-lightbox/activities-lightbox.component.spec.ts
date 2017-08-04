import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ActivitiesLightboxComponent} from './activities-lightbox.component';

describe('ActivitiesLightboxComponent', () => {
    let component:ActivitiesLightboxComponent;
    let fixture:ComponentFixture<ActivitiesLightboxComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ActivitiesLightboxComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ActivitiesLightboxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
