import { TestBed, inject } from '@angular/core/testing';

import { AdelantoempleadoService } from './adelantoempleado.service';

describe('AdelantoempleadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdelantoempleadoService]
    });
  });

  it('should be created', inject([AdelantoempleadoService], (service: AdelantoempleadoService) => {
    expect(service).toBeTruthy();
  }));
});
