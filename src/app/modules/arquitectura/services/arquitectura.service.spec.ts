import { TestBed } from '@angular/core/testing';
import { ArquitecturaService } from './arquitectura.service';

describe('ArquitecturaService', () => {
  let service: ArquitecturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArquitecturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
