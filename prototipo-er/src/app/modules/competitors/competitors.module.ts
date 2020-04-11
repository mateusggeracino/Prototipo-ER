import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetitorsComponent } from './components/competitors/competitors.component';
import { CompetitorsRoutingModule } from './competitors-routing.module';
import { ViewProductComponent } from './components/view-product/view-product.component';
import {
  MatInputModule, MatCardModule, MatButtonModule, MatTableModule, MatIconModule,
  MatDialogModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TableProductComponent } from './components/table-product/table-product.component';
import { FormsModule } from '@angular/forms';
import { MyProductsComponent } from './components/modals/my-products/my-products.component';

@NgModule({
  declarations: [
    CompetitorsComponent,
    ViewProductComponent,
    TableProductComponent,
    MyProductsComponent
  ],
  entryComponents: [
    MyProductsComponent
  ],
  imports: [
    CommonModule,
    CompetitorsRoutingModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatTableModule,
    MatIconModule,
    FormsModule,
    MatDialogModule
  ],
  exports: [
    CompetitorsComponent,
    ViewProductComponent,
    TableProductComponent
  ]
})
export class CompetitorsModule { }
