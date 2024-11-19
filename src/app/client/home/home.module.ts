import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeProductsComponent } from './home-products/home-products.component';
import { HomeRoutingModule } from './home-routing.module';




@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
