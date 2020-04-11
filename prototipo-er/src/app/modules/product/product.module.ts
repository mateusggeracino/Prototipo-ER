import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProductsComponent } from './components/view-products/view-products.component';
import { ProductRoutingModule } from './product-rounting.module';
import { MatFormFieldModule, MatIconModule, MatButtonModule, MatInputModule, MatSelectModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductCardComponent } from './components/product-card/product-card.component';



@NgModule({
  declarations: [
    ViewProductsComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule,
    MatSelectModule,
    MatCardModule
  ],
  exports: [
    ViewProductsComponent
  ]
})
export class ProductModule { }
