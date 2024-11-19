import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { CrudService } from '../services/crud.service'; // Ajustez le chemin selon votre structure

@Component({
  selector: 'app-gestprod',
  standalone: true,
  imports: [],
  templateUrl: './gestprod.component.html',
  styleUrls: ['./gestprod.component.css'], // Correction : styleUrls (au pluriel)
})
export class GestprodComponent implements OnInit {
  products: any[] = []; // Déclaration de la propriété pour stocker les produits

  //constructor(private router: Router, private crudService: CrudService) {}

  constructor(private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  /*
  ngOnInit(): void {
    this.getProducts(); // Charger les produits au démarrage
  }
  
  // Méthode pour récupérer les produits
  
  getProducts(): void {
    this.crudService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des produits :', error);
      },
    });
  }
  */

  // Méthode pour naviguer vers le formulaire d'ajout de produit
  navigateToProductAdd(): void {
    this.router.navigate(['gestprod/product-add']);
  }
}
