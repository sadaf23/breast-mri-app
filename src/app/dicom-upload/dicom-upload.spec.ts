import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DicomUpload } from './dicom-upload';

describe('DicomUpload', () => {
  let component: DicomUpload;
  let fixture: ComponentFixture<DicomUpload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DicomUpload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DicomUpload);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
