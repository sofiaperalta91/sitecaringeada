import { Component } from '@angular/core';
import { NameMenuComponent } from '../name-menu/name-menu.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NameMenuComponent, RouterLinkActive, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  constructor(private router: Router) { }

  toLandingPage() {
    this.router.navigateByUrl('');
  }
  toTheatrePage() {
    this.router.navigateByUrl('theatre');
  }
  toDancePage() {
    this.router.navigateByUrl('dance');
  }
  toTvEventsGigs() {
    this.router.navigateByUrl('tv-events-gigs');
  }
  toOtherWorks() {
    this.router.navigateByUrl('other-works');
  }
  toFutureProjects() {
    this.router.navigateByUrl('future-projects');
  }
  toAwards() {
    this.router.navigateByUrl('awards');
  }
  toClipping() {
    this.router.navigateByUrl('clipping');
  }
  toAbout() {
    this.router.navigateByUrl('about');
  }
}
