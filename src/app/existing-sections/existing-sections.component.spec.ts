import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingSectionsComponent } from './existing-sections.component';

describe('ExistingSectionsComponent', () => {
  let component: ExistingSectionsComponent;
  let fixture: ComponentFixture<ExistingSectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingSectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
