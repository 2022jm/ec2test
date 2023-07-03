import { TestBed } from '@angular/core/testing';

import { BiosampleTableService } from './biosample-table.service';

describe('BiosampleTableService', () => {
  let service: BiosampleTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiosampleTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
