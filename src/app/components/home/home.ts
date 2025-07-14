import { Component } from '@angular/core';
import { AutoScrollCarouselComponent } from '../auto-scroll-carousel/auto-scroll-carousel';
import { fadeInUpAnimation } from '../../effects/fade';
import { provideAnimations } from '@angular/platform-browser/animations';
import AOS from 'aos';
@Component({
  selector: 'app-home',
  imports: [AutoScrollCarouselComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  ngOnInit() {
    AOS.init();
  }
}
