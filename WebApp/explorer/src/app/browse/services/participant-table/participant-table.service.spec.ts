import { TestBed } from '@angular/core/testing';

import { ParticipantTableService } from './participant-table.service';

describe('ParticipantTableService', () => {
  let service: ParticipantTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticipantTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
