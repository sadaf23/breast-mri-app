import { TestBed } from '@angular/core/testing';

import { Dicom } from './dicom';

describe('Dicom', () => {
  let service: Dicom;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dicom);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
