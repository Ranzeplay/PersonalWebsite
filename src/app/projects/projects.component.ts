import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faGitAlt, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSitemap } from '@fortawesome/free-solid-svg-icons';
import { ProductModel as ProjectModel } from './model';

@Component({
  selector: 'app-products',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  faGit = faGitAlt;
  faSitemap = faSitemap;
  faGitHub = faGithub;

  public projects: ProjectModel[];

  constructor(private http: HttpClient) {
    this.projects = [];
  }

  ngOnInit() {
    this.http.get('assets/projects.json').subscribe((data) => {
      console.log(data);
      const dataString = JSON.stringify(data);
      this.projects = JSON.parse(dataString);
    });
  }
}
