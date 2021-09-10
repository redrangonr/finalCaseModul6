import { TestBed } from '@angular/core/testing';

import { CommmentpostService } from './commmentpost.service';

describe('CommmentpostService', () => {
  let service: CommmentpostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommmentpostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
