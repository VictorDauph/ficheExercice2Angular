import { Component } from '@angular/core';
import { Supplier } from '../models/Supplier';
import { CommonModule } from '@angular/common';
import { SupplierCardComponent } from "../supplier-card/supplier-card.component";
import { ChangerCouleurDirective } from '../changer-couleur.directive';

@Component({
  selector: 'app-supplier-list',
  imports: [CommonModule, SupplierCardComponent, ChangerCouleurDirective],
  templateUrl: './supplier-list.component.html',
  styleUrl: './supplier-list.component.css'
})
export class SupplierListComponent {
  message = "Hello";
  suppliers: Supplier[] = [
    new Supplier(1, 'Jean Dupont', 'TechCorp', '0123456789'),
    new Supplier(2, 'Marie Curie', 'InnovaTech', '0987654321'),
    new Supplier(3, 'Albert Einstein', 'PhysicsWorld', '0147258369'),
    new Supplier(4, 'Ada Lovelace', 'CodeInnov', '0173649528'),
    new Supplier(5, 'Alan Turing', 'MathTech', '0192837465')
  ];

  ngOnInit() {
    let supplier = new Supplier(6, 'Louis Pasteur', 'Systemics', '0333435363');
    this.suppliers.push(supplier);
    supplier.toggleIsVerfied();
    console.log("");
  }


}
