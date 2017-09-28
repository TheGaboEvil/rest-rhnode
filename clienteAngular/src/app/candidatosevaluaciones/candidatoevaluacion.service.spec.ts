import { TestBed, inject } from '@angular/core/testing';

import { CandidatoevaluacionService } from './candidatoevaluacion.service';

describe('CandidatoevaluacionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CandidatoevaluacionService]
    });
  });

  it('should be created', inject([CandidatoevaluacionService], (service: CandidatoevaluacionService) => {
    expect(service).toBeTruthy();
  }));
});
