import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesAnalisisComponent } from './components/sales-analisis/sales-analisis.component';
import { SalesAnalisisRoutingModule } from './sales-analisis-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material';
import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';
import {MAT_DATE_LOCALE} from 'saturn-datepicker';

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
    SalesAnalisisComponent
  ],
  imports: [
    CommonModule,
    SalesAnalisisRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    SatDatepickerModule,
    SatNativeDateModule
  ],
  exports: [
    SalesAnalisisComponent
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}
  ]
})
export class SalesAnalisisModule { }
