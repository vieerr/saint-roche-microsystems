import { Component } from '@angular/core';
import { AutoScrollCarouselComponent } from "../auto-scroll-carousel/auto-scroll-carousel";

@Component({
  selector: 'app-home',
  imports: [AutoScrollCarouselComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}