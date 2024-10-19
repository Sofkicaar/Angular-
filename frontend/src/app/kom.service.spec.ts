import { TestBed } from '@angular/core/testing';

import { KomService } from './kom.service';

describe('KomService', () => {
  let service: KomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
