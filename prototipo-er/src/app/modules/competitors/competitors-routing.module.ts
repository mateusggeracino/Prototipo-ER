import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CompetitorsComponent } from './components/competitors/competitors.component';

const routes = [
  {
    path: '',
    component: CompetitorsComponent,
    children: [
      {
        path: 'listar',
        component: CompetitorsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetitorsRoutingModule { }
