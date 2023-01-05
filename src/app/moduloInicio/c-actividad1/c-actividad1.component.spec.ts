import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CActividad1Component } from './c-actividad1.component';

describe('CActividad1Component', () => {
  let component: CActividad1Component;
  let fixture: ComponentFixture<CActividad1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CActividad1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CActividad1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
