import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuComponent } from '../../components/menu/menu.component';

@Component({
  selector: 'app-future-projects',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './future-projects.component.html',
  styleUrl: './future-projects.component.scss'
})
export class FutureProjectsComponent {
  constructor(private router: Router) { }
}
