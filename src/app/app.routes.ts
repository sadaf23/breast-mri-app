import { Routes } from '@angular/router';
import { DicomUpload } from './dicom-upload/dicom-upload';
import { DicomResult } from './dicom-result/dicom-result';

export const routes: Routes = [
    {path: '', component:DicomUpload},
    {path: 'results', component:DicomResult}
];
