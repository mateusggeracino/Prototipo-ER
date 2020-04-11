import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ViewProductsComponent } from './components/view-products/view-products.component';

const routes = [
  {
    path: '',
    component: ViewProductsComponent,
    children: [
      {
        path: 'listar',
        component: ViewProductsComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
