import { Component } from '@angular/core';
import { PhotoService } from './photo.service';
import { PhotoInfo } from './photo';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {
  photos: PhotoInfo[];

  constructor(public photoService: PhotoService) {
    this.photos = [];
  }

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe((response: PhotoInfo[]) => {
      if (Array.isArray(response)) {
        this.photos = response.slice(0, 10);
      }
    });
  }  
}
