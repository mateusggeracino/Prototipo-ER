import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleComponent } from './components/sale/sale.component';
import { ProductSaleComponent } from './components/product-sale/product-sale.component';
import {
  MatCardModule, MatButtonModule, MatInputModule, MatIconModule, MatFormFieldModule,
  MatSelectModule, MAT_DATE_LOCALE, MatNativeDateModule, MatDatepickerModule, MAT_DATE_FORMATS, DateAdapter, MatDialog, MatDialogModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SaleRoutingModule } from './sale-routing.module';
import { RecomendationComponent } from './components/recomendation/recomendation.component';
import { AddOffComponent } from './components/add-off/add-off.component';
import { FormsModule } from '@angular/forms';
import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';
import { VisualizeProductComponent } from '../product/components/visualize-product/visualize-product.component';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@NgModule({
  declarations: [
    SaleComponent,
    ProductSaleComponent,
    RecomendationComponent,
    AddOffComponent,
    VisualizeProductComponent
  ],
  entryComponents: [
    VisualizeProductComponent
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
    MatCardModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SatDatepickerModule,
    SatNativeDateModule,
    MatDialogModule,
  ],
  exports: [
    SaleComponent,
    ProductSaleComponent,
    RecomendationComponent
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  ]
})
export class SaleModule { }
