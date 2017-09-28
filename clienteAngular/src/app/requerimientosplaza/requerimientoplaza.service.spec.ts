import { TestBed, inject } from '@angular/core/testing';

import { RequerimientoplazaService } from './requerimientoplaza.service';

describe('RequerimientoplazaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequerimientoplazaService]
    });
  });

  it('should be created', inject([RequerimientoplazaService], (service: RequerimientoplazaService) => {
    expect(service).toBeTruthy();
  }));
});
