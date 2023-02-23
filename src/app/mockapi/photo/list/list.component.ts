import { Component } from '@angular/core';
import { PhotoService } from '../photo.service';
import { PhotoInfo } from '../photo';
import {
  AUTO_STYLE,
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

const DEFAULT_DURATION = 300;

@Component({
  selector: 'app-photo',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [
    trigger('collapse', [
      state('open', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
      state('closed', style({ height: '0', visibility: 'hidden' })),
      transition('closed => open', animate(DEFAULT_DURATION + 'ms ease-in')),
      transition('open => closed', animate(DEFAULT_DURATION + 'ms ease-out'))
    ]),
    trigger('rotation', [
      state('open', style({ transform: 'rotate(45deg)' })),
      state('closed', style({ transform: 'rotate(0deg)' })),
      transition('closed => open', animate(DEFAULT_DURATION + 'ms ease-in')),
      transition('open => closed', animate(DEFAULT_DURATION + 'ms ease-out'))
    ])

  ]
})
export class PhotoComponent {
  photos: PhotoInfo[];
  collapsed: boolean = true;

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

  toggle() {
    this.collapsed = !this.collapsed;
  }
}
