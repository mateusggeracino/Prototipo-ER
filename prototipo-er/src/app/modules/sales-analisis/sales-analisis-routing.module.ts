import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SalesAnalisisComponent } from './components/sales-analisis/sales-analisis.component';

const routes = [
  {
    path: '',
    component: SalesAnalisisComponent
  },
  {
    path: 'analise-vendas',
    component: SalesAnalisisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesAnalisisRoutingModule { }
