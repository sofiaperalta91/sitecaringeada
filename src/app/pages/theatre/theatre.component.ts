import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuComponent } from '../../components/menu/menu.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';

@Component({
  selector: 'app-theatre',
  standalone: true,
  imports: [MenuComponent, CarouselComponent],
  templateUrl: './theatre.component.html',
  styleUrl: './theatre.component.scss',
})
export class TheatreComponent {
  constructor(private router: Router) {}
}
