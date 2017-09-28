import { TestBed, inject } from '@angular/core/testing';

import { PlanillaempleadoService } from './planillaempleado.service';

describe('PlanillaempleadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanillaempleadoService]
    });
  });

  it('should be created', inject([PlanillaempleadoService], (service: PlanillaempleadoService) => {
    expect(service).toBeTruthy();
  }));
});
