import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Dicom } from '../dicom';

@Component({
  selector: 'app-dicom-upload',
  imports: [],
  templateUrl: './dicom-upload.html',
  styleUrl: './dicom-upload.css'
})
export class DicomUpload {
selectedFiles: File[] = [];

  constructor(private router: Router, private dicomService: Dicom) {}

  
onFileSelected(event: any): void {
 const input = event.target as HTMLInputElement;
if (input.files) {
  this.selectedFiles = Array.from(input.files);
}

}

upload(): void {
  this.router.navigate(['/results']);
}
}
