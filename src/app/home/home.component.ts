import { Component, OnInit } from '@angular/core';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBlog, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  faGitHub = faGithub;
  faEnvelope = faEnvelope;
  faYouTube = faYoutube;
  faBlog = faBlog;

  constructor() {}

  ngOnInit() {}
}
