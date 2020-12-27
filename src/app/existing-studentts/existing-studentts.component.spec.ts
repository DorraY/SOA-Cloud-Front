import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingStudenttsComponent } from './existing-studentts.component';

describe('ExistingStudenttsComponent', () => {
  let component: ExistingStudenttsComponent;
  let fixture: ComponentFixture<ExistingStudenttsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingStudenttsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingStudenttsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
