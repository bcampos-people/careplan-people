import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsScopeComponent } from './alerts-scope.component';

describe('AlertsScopeComponent', () => {
  let component: AlertsScopeComponent;
  let fixture: ComponentFixture<AlertsScopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertsScopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsScopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
