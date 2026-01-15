import { TestBed } from '@angular/core/testing';

import { Ex14Catalogservice } from './ex14-catalogservice';

describe('Ex14Catalogservice', () => {
  let service: Ex14Catalogservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ex14Catalogservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
