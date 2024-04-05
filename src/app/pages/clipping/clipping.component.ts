import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuComponent } from '../../components/menu/menu.component';

@Component({
  selector: 'app-clipping',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './clipping.component.html',
  styleUrl: './clipping.component.scss',
})
export class ClippingComponent {
  constructor(private router: Router) {}
}
