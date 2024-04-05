import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuComponent } from '../../components/menu/menu.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';

@Component({
  selector: 'app-dance',
  standalone: true,
  imports: [MenuComponent, CarouselComponent],
  templateUrl: './dance.component.html',
  styleUrl: './dance.component.scss'
})
export class DanceComponent {
  constructor(private router: Router) { }
}
