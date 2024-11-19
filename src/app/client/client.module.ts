import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { HomeBannerComponent } from './home/home-banner/home-banner.component';
import { HomeDetailsProductsComponent } from './home/home-details-products/home-details-products.component';
import { HomeProductsComponent } from './home/home-products/home-products.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClientRoutingModule,
    HomeBannerComponent,
    HomeDetailsProductsComponent,
    HomeProductsComponent,
    AboutModule
  ]
})
export class ClientModule { }
