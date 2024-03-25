import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuComponent } from '../../components/menu/menu.component';

@Component({
  selector: 'app-other-works',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './other-works.component.html',
  styleUrl: './other-works.component.scss'
})
export class OtherWorksComponent {
  constructor(private router: Router) { }
}
