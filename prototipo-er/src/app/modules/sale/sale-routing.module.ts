import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SaleComponent } from './components/sale/sale.component';
import { RecomendationComponent } from './components/recomendation/recomendation.component';
import { AddOffComponent } from './components/add-off/add-off.component';

const routes = [
  {
    path: '',
    component: SaleComponent,
    children: [
      {
        path: 'listar',
        component: SaleComponent,
      }
    ]
  },
  {
    path: 'recomendacoes',
    component: RecomendationComponent,
  },
  {
    path: 'adicionar-promocao',
    component: AddOffComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleRoutingModule { }
