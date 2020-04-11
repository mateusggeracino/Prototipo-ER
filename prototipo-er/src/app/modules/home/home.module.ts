import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';



@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
