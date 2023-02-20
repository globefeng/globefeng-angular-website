import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoInfo } from '../photo';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class PhotoDetailComponent implements OnInit {
  photoId: number = 0;
  photo?: PhotoInfo;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public photoService: PhotoService
  ) {
  }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    this.photoId = Number(routeParams.get('photoId'));

    this.photoService.getPhoto(this.photoId).subscribe((response: PhotoInfo) => {
        this.photo = response;
    });

  }  
}
