import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingPersonnelsComponent } from './existing-personnels.component';

describe('ExistingPersonnelsComponent', () => {
  let component: ExistingPersonnelsComponent;
  let fixture: ComponentFixture<ExistingPersonnelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingPersonnelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingPersonnelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
