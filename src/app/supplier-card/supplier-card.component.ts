import { Component, Input } from '@angular/core';
import { Supplier } from '../models/Supplier';

@Component({
  selector: 'app-supplier-card',
  imports: [],
  templateUrl: './supplier-card.component.html',
  styleUrl: './supplier-card.component.css'
})
export class SupplierCardComponent {
  @Input() supplier: Supplier = {} as Supplier;

  toggleIsVerified() {
    this.supplier.toggleIsVerfied();
  }
}
