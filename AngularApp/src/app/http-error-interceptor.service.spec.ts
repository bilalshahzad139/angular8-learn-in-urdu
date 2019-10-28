import { TestBed } from '@angular/core/testing';

import { HttpErrorInterceptorService } from './http-error-interceptor.service';

describe('HttpErrorInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpErrorInterceptorService = TestBed.get(HttpErrorInterceptorService);
    expect(service).toBeTruthy();
  });
});
