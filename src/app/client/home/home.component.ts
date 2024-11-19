import { Component } from '@angular/core';
import { HomeBannerComponent } from "./home-banner/home-banner.component";
import { HomeProductsComponent } from "./home-products/home-products.component";
import { HomeDetailsProductsComponent } from "./home-details-products/home-details-products.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeBannerComponent, HomeProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
