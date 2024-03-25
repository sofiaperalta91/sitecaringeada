import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuComponent } from '../../components/menu/menu.component';

@Component({
  selector: 'app-theatre',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './theatre.component.html',
  styleUrl: './theatre.component.scss'
})
export class TheatreComponent {
  constructor(private router: Router) { }
}
