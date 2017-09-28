import { TestBed, inject } from '@angular/core/testing';

import { AgendaempleadoService } from './agendaempleado.service';

describe('AgendaempleadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgendaempleadoService]
    });
  });

  it('should be created', inject([AgendaempleadoService], (service: AgendaempleadoService) => {
    expect(service).toBeTruthy();
  }));
});
