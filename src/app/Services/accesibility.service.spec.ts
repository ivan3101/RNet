import { TestBed, inject } from '@angular/core/testing';

import { AccesibilityService } from './accessibility.service';

describe('AccesibilityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccesibilityService]
    });
  });

  it('should be created', inject([AccesibilityService], (service: AccesibilityService) => {
    expect(service).toBeTruthy();
  }));
});
