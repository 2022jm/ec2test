import { TestBed } from '@angular/core/testing';

import { NgsRnaTableService } from './ngs-rna-table.service';

describe('NgsRnaTableService', () => {
  let service: NgsRnaTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgsRnaTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
