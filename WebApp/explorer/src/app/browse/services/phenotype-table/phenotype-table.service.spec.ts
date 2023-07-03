import { TestBed } from '@angular/core/testing';

import { PhenotypeTableService } from './phenotype-table.service';

describe('PhenotypeTableService', () => {
  let service: PhenotypeTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhenotypeTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
