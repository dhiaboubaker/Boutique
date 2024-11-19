import { Routes } from '@angular/router';
import { HomeComponent } from './client/home/home.component';
import { ClientComponent } from './client/client.component';
import { AboutComponent } from './client/about/about.component';
import { GestprodComponent } from './admin/gestprod/gestprod.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'gestprod', loadChildren: () => import('./admin/gestprod/gestprod.module').then(m => m.GestprodModule) }
];
