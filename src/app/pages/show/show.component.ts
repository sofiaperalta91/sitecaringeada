import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './show.component.html',
  styleUrl: './show.component.scss',
})
export class ShowComponent {
  constructor(private router: Router) {}
}
