import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Dicom {
files: File[] = [];

  setFiles(files: File[]): void {
    this.files = files;
    console.log('files set')
  }

  getFiles(): File[] {
    console.log('files get')
    return this.files;
  }
}