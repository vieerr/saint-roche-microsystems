import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLocation, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-us',
  imports: [FaIconComponent],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs {
  constructor() {
    library.add(faLocation, faPhone, faMailBulk);
  }
  faLocation = faLocation;
  faPhone = faPhone;
  faMailBulk = faMailBulk;
}
