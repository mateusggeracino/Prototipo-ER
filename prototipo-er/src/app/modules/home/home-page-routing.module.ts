import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'home-page',
    component: HomePageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
