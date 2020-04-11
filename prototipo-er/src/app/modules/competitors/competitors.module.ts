import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetitorsComponent } from './components/competitors/competitors.component';
import { CompetitorsRoutingModule } from './competitors-routing.module';



@NgModule({
  declarations: [
    CompetitorsComponent
  ],
  imports: [
    CommonModule,
    CompetitorsRoutingModule,
  ],
  exports: [
    CompetitorsComponent
  ]
})
export class CompetitorsModule { }
