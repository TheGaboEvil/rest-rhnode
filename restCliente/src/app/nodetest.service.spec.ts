import { TestBed, inject } from '@angular/core/testing';

import { NodetestService } from './nodetest.service';

describe('NodetestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NodetestService]
    });
  });

  it('should be created', inject([NodetestService], (service: NodetestService) => {
    expect(service).toBeTruthy();
  }));
});
