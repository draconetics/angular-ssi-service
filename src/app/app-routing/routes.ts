import { Routes } from '@angular/router';

import { CatalogComponent } from '../catalog/catalog.component';
import { HomeComponent } from '../home/home.component';
import {ContactComponent} from '../contact/contact.component';
import {AboutComponent} from '../about/about.component';
import {ItemDetailComponent} from '../item-detail/item-detail.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'catalog',     component: CatalogComponent },
  { path: 'contactus',     component: ContactComponent },
  { path: 'about',     component: AboutComponent },
  { path: 'itemdetail/:id',     component: ItemDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
