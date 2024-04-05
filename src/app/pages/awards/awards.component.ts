import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuComponent } from '../../components/menu/menu.component';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.scss',
})
export class AwardsComponent {
  constructor(private router: Router) {}
}
