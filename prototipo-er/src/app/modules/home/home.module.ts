import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule,
    MatListModule,
    MatButtonModule
  ],
  exports: [
    HomePageComponent,
  ]
})
export class HomeModule { }
