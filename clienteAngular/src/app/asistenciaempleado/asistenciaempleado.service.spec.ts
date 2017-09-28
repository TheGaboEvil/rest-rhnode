import { TestBed, inject } from '@angular/core/testing';

import { AsistenciaempleadoService } from './asistenciaempleado.service';

describe('AsistenciaempleadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsistenciaempleadoService]
    });
  });

  it('should be created', inject([AsistenciaempleadoService], (service: AsistenciaempleadoService) => {
    expect(service).toBeTruthy();
  }));
});
