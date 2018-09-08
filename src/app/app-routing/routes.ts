import { Routes } from '@angular/router';

import { CatalogComponent } from '../catalog/catalog.component';
import { HomeComponent } from '../home/home.component';
import {ContactComponent} from '../contact/contact.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'catalog',     component: CatalogComponent },
  { path: 'contactus',     component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
