import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingTeachersComponent } from './existing-teachers.component';

describe('ExistingTeachersComponent', () => {
  let component: ExistingTeachersComponent;
  let fixture: ComponentFixture<ExistingTeachersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingTeachersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
