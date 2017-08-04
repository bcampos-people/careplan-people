import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NocareplanComponent } from './nocareplan.component';

describe('NocareplanComponent', () => {
  let component: NocareplanComponent;
  let fixture: ComponentFixture<NocareplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NocareplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NocareplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
