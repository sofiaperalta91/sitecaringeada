import { Router } from '@angular/router';
import { MenuComponent } from '../../components/menu/menu.component';import { Component } from '@angular/core';

@Component({
  selector: 'app-tv-events-gigs',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './tv-events-gigs.component.html',
  styleUrl: './tv-events-gigs.component.scss'
})
export class TvEventsGigsComponent {
  constructor(private router: Router) { }
}
