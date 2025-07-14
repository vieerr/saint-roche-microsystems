import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGamepad,
  faMobile,
  faWindowRestore,
} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
@Component({
  selector: 'app-about-us',
  imports: [FontAwesomeModule],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {
  ngOnInit() {
    AOS.init();
  }
  constructor() {
    library.add(faWindowRestore, faMobile, faGamepad);
  }
  faWindowRestore = faWindowRestore;
  faMobile = faMobile;
  faGamepad = faGamepad;
}
