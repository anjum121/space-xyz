import { TestBed } from '@angular/core/testing';

import { ClientUtilService } from './client-util.service';

describe('ClientUtilService', () => {
  let service: ClientUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
