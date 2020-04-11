import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleComponent } from './components/sale/sale.component';
import { ProductSaleComponent } from './components/product-sale/product-sale.component';
import { MatCardModule, MatButtonModule, MatInputModule, MatIconModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SaleRoutingModule } from './sale-routing.module';



@NgModule({
  declarations: [
    SaleComponent,
    ProductSaleComponent
  ],
  imports: [
    CommonModule,
    SaleRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule,
    MatSelectModule,
    MatCardModule
  ],
  exports: [
    SaleComponent,
    ProductSaleComponent
  ]
})
export class SaleModule { }
