import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faGamepad, faMobile, faPhone, faWindowRestore } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-about-us',
  imports: [FontAwesomeModule],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css'
})
export class AboutUs {

  constructor(){
    library.add(faWindowRestore, faMobile, faGamepad);
  }
  faWindowRestore = faWindowRestore;  
  faMobile = faMobile;
  faGamepad = faGamepad;
}
