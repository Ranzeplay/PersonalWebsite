import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home - Jeb Feng' },
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: { title: 'Projects - Jeb Feng' },
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    data: { title: 'Gallery - Jeb Feng' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
