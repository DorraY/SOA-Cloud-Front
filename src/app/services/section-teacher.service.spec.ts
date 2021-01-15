import { TestBed } from '@angular/core/testing';

import { SectionTeacherService } from './section-teacher.service';

describe('SectionTeacherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SectionTeacherService = TestBed.get(SectionTeacherService);
    expect(service).toBeTruthy();
  });
});
