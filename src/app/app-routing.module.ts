import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PhotoComponent } from './mockapi/photo/list/list.component';
import { PhotoDetailComponent } from './mockapi/photo/detail/detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'photos', component: PhotoComponent },
  { path: 'photos/:photoId', component: PhotoDetailComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
