import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjustFontComponent } from './ajust-font.component';

describe('AjustFontComponent', () => {
  let component: AjustFontComponent;
  let fixture: ComponentFixture<AjustFontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjustFontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjustFontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
