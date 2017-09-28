import { TestBed, inject } from '@angular/core/testing';

import { DescuentoautomaticoService } from './descuentoautomatico.service';

describe('DescuentoautomaticoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DescuentoautomaticoService]
    });
  });

  it('should be created', inject([DescuentoautomaticoService], (service: DescuentoautomaticoService) => {
    expect(service).toBeTruthy();
  }));
});
