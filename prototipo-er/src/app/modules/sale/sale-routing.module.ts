import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SaleComponent } from './components/sale/sale.component';

const routes = [
  {
    path: '',
    component: SaleComponent,
  },
  {
    path: 'listar',
    component: SaleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleRoutingModule { }
