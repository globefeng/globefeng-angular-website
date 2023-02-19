import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotoInfo } from './photo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  public getPhotos(): Observable<PhotoInfo[]> {
    const url = 'https://jsonplaceholder.typicode.com/photos';

    return this.http.get<PhotoInfo[]>(url);
  }
}
