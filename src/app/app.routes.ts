import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AboutUs } from './components/about-us/about-us';
import { Team } from './components/team/team';
import { ContactUs } from './components/contact-us/contact-us';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about-us', component: AboutUs },
  { path: 'team', component: Team },
  { path: 'contact-us', component: ContactUs }
];
