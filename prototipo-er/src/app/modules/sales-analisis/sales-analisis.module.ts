import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesAnalisisComponent } from './components/sales-analisis/sales-analisis.component';
import { SalesAnalisisRoutingModule } from './sales-analisis-routing.module';



@NgModule({
  declarations: [
    SalesAnalisisComponent
  ],
  imports: [
    CommonModule,
    SalesAnalisisRoutingModule
  ],
  exports: [
    SalesAnalisisComponent
  ]
})
export class SalesAnalisisModule { }
