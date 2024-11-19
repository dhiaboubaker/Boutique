import { Component, OnInit } from '@angular/core';
import { CATALOGUE } from '../../../shared/mock-data/catalogue-produits';
import { CommonModule } from '@angular/common';
import { Produit } from '../../../shared/models/produit';
import { HomeDetailsProductsComponent } from '../home-details-products/home-details-products.component';

@Component({
  selector: 'app-home-products',
  standalone: true,
  imports: [CommonModule,HomeDetailsProductsComponent],
  templateUrl: './home-products.component.html',
  styleUrl: './home-products.component.css'
})
export class HomeProductsComponent implements OnInit{
  ngOnInit(): void {}
  
  title = 'PRODUITS';
  produits=CATALOGUE;
  selectProduit  : Produit = new Produit;
  onDetails=(prod: Produit)=>{
    this.selectProduit = prod;
  }
}
