import { Injectable } from '@angular/core';
import { Produit } from '../shared/models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private produits: Produit[] =  [];

  constructor() { 

    
  }


  getProducts(): Produit[] {
    return this.produits;
    }
}
