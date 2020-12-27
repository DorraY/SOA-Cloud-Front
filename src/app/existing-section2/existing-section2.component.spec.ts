import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingSection2Component } from './existing-section2.component';

describe('ExistingSection2Component', () => {
  let component: ExistingSection2Component;
  let fixture: ComponentFixture<ExistingSection2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingSection2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingSection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
