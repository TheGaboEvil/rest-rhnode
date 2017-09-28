import { TestBed, inject } from '@angular/core/testing';

import { PerfilplazaService } from './perfilplaza.service';

describe('PerfilplazaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PerfilplazaService]
    });
  });

  it('should be created', inject([PerfilplazaService], (service: PerfilplazaService) => {
    expect(service).toBeTruthy();
  }));
});
