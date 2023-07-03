import { TestBed } from '@angular/core/testing';

import { NgsDnaTableService } from './ngs-dna-table.service';

describe('NgsDnaTableService', () => {
  let service: NgsDnaTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgsDnaTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
