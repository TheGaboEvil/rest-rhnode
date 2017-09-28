import { TestBed, inject } from '@angular/core/testing';

import { FuncionplazaService } from './funcionplaza.service';

describe('FuncionplazaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FuncionplazaService]
    });
  });

  it('should be created', inject([FuncionplazaService], (service: FuncionplazaService) => {
    expect(service).toBeTruthy();
  }));
});
