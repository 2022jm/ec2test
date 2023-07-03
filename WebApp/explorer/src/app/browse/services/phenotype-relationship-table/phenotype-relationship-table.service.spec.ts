import { TestBed } from '@angular/core/testing';

import { PhenotypeRelationshipTableService } from './phenotype-relationship-table.service';

describe('PhenotypeRelationshipTableService', () => {
  let service: PhenotypeRelationshipTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhenotypeRelationshipTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
