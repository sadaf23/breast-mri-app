import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DicomResult } from './dicom-result';

describe('DicomResult', () => {
  let component: DicomResult;
  let fixture: ComponentFixture<DicomResult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DicomResult]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DicomResult);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
