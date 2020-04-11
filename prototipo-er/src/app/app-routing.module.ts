import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'produtos',
    loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'promocoes',
    loadChildren: () => import('./modules/sale/sale.module').then(m => m.SaleModule)
  },
  {
    path: 'analise-vendas',
    loadChildren: () => import('./modules/sales-analisis/sales-analisis.module').then(m => m.SalesAnalisisModule)
  },
  {
    path: 'concorrentes',
    loadChildren: () => import('./modules/competitors/competitors.module').then(m => m.CompetitorsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
