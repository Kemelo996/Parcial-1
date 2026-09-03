import { TestBed } from '@angular/core/testing';

import { PrincipiosService } from './principios.service';

describe('PrincipiosService', () => {
  let service: PrincipiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrincipiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
