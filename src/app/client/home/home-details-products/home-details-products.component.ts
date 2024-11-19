import { Component, Input } from '@angular/core';
import { Produit } from '../../../shared/models/produit';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-details-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-details-products.component.html',
  styleUrl: './home-details-products.component.css'
})
export class HomeDetailsProductsComponent {
 @Input() prod: Produit = new Produit();
 @Input() msg!: string;
 
}
