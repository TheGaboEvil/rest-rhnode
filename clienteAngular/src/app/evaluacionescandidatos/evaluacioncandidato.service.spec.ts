import { TestBed, inject } from '@angular/core/testing';

import { EvaluacioncandidatoService } from './evaluacioncandidato.service';

describe('EvaluacioncandidatoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EvaluacioncandidatoService]
    });
  });

  it('should be created', inject([EvaluacioncandidatoService], (service: EvaluacioncandidatoService) => {
    expect(service).toBeTruthy();
  }));
});
