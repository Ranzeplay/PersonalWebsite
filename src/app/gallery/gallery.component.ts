import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ArtworkModel } from './model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  constructor(private http: HttpClient) {
    this.artworks = [];
  }

  ngOnInit(): void {
    this.http.get('assets/gallery/index.json').subscribe((data) => {
      console.log(data);
      const dataString = JSON.stringify(data);
      this.artworks = JSON.parse(dataString);
    });
  }

  artworks: ArtworkModel[];
}
