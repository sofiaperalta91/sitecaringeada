import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { NameMenuComponent } from '../../components/name-menu/name-menu.component';
import { NgStyle } from '@angular/common';



@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [MatButtonModule, NameMenuComponent, NgStyle],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {
  currentImageIndex = 0;
  imageUrls: string[] = [
    'url(../../../assets/f1.png)',
    'url(../../../assets/f2.png)',
    'url(../../../assets/f3.png)',
    'url(../../../assets/f4.png)',
    'url(../../../assets/f5.png)',
    'url(../../../assets/f6.png)',
    'url(../../../assets/f7.png)',
    'url(../../../assets/f8.png)',
  ];
  currentImageUrl: string = this.imageUrls[0];


  constructor(private router: Router) { }

  ngOnInit() {
    // Change the background image every 10 seconds
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.imageUrls.length;
      this.currentImageUrl = this.imageUrls[this.currentImageIndex];
      console.log(this.currentImageUrl)
    }, 10000);
  }

enter() {
  this.router.navigateByUrl('about')
}

}
