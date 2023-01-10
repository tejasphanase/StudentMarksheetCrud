import { TestBed } from '@angular/core/testing';

import { StudenmarkService } from './studenmark.service';

describe('StudenmarkService', () => {
  let service: StudenmarkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudenmarkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
