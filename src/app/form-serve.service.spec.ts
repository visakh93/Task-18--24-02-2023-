import { TestBed } from '@angular/core/testing';

import { FormServeService } from './form-serve.service';

describe('FormServeService', () => {
  let service: FormServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
