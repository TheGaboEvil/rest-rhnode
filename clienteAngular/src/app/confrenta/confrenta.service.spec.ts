import { TestBed, inject } from '@angular/core/testing';

import { ConfrentaService } from './confrenta.service';

describe('ConfrentaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfrentaService]
    });
  });

  it('should be created', inject([ConfrentaService], (service: ConfrentaService) => {
    expect(service).toBeTruthy();
  }));
});
