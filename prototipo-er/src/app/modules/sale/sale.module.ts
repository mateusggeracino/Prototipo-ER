import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleComponent } from './components/sale/sale.component';
import { ProductSaleComponent } from './components/product-sale/product-sale.component';
import {
  MatCardModule, MatButtonModule, MatInputModule, MatIconModule, MatFormFieldModule,
  MatSelectModule, MatNativeDateModule, MatDialogModule
} from '@angular/material';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SaleRoutingModule } from './sale-routing.module';
import { RecomendationComponent } from './components/recomendation/recomendation.component';
import { AddOffComponent } from './components/add-off/add-off.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, SatDatepickerModule } from 'saturn-datepicker';
import { ProductModule } from '../product/product.module';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

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
    MatDialogModule,
    ProductModule,
    ReactiveFormsModule
  ],
  exports: [
    SaleComponent,
    ProductSaleComponent,
    RecomendationComponent
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class SaleModule { }
