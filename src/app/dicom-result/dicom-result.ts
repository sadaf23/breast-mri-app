import { AfterViewInit, Component } from '@angular/core';
import { Dicom } from '../dicom';
import * as cornerstone from 'cornerstone-core';
import * as dicomParser from 'dicom-parser';
import * as cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';

@Component({
  selector: 'app-dicom-result',
  standalone: true,
  imports: [],
  templateUrl: './dicom-result.html',
  styleUrls: ['./dicom-result.css']
})
export class DicomResult implements AfterViewInit {
  constructor(private dicomService: Dicom) {}

  ngAfterViewInit() {
    setTimeout(() => {
      const element = document.getElementById('dicomImage')!;
      cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
      cornerstoneWADOImageLoader.external.dicomParser = dicomParser;

      cornerstoneWADOImageLoader.configure({});

      cornerstoneWADOImageLoader.webWorkerManager.initialize({
        webWorkerPath: 'assets/cornerstoneWADOImageLoaderWebWorker.bundle.min.js',
        taskConfiguration: {
          decodeTask: {}
        }
      });

      cornerstone.enable(element);
    }, 100);
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    const file = input.files[0];
    const imageId = cornerstoneWADOImageLoader.wadouri.fileManager.add(file);
    const element = document.getElementById('dicomImage')!;

    cornerstone.loadImage(imageId).then((image: any) => {
      cornerstone.displayImage(element, image);
    }).catch((err: any) => console.error("Failed to display image", err));
  }
}
