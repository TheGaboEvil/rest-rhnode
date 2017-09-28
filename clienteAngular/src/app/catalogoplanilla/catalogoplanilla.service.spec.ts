import { TestBed, inject } from '@angular/core/testing';

import { CatalogoplanillaService } from './catalogoplanilla.service';

describe('CatalogoplanillaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatalogoplanillaService]
    });
  });

  it('should be created', inject([CatalogoplanillaService], (service: CatalogoplanillaService) => {
    expect(service).toBeTruthy();
  }));
});
