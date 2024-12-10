import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'suppliers',
        loadComponent: () => import('./supplier-list/supplier-list.component').then(c => c.SupplierListComponent)
    },
    {
        path: '**', // Correspond à toutes les routes non définies
        redirectTo: 'suppliers'
    }
];
