import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesPlaceComponent } from './activities-place.component';

describe('ActivitiesPlaceComponent', () => {
  let component: ActivitiesPlaceComponent;
  let fixture: ComponentFixture<ActivitiesPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitiesPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
