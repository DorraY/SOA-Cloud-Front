import { TestBed } from '@angular/core/testing';

import { AdminstratifService } from './adminstratif.service';

describe('AdminstratifService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminstratifService = TestBed.get(AdminstratifService);
    expect(service).toBeTruthy();
  });
});
