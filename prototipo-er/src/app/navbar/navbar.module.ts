import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule, MatToolbarModule, MatListModule, MatButtonModule } from '@angular/material';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MenuComponent } from './menu/menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    SidebarComponent,
    ToolbarComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  exports: [
    SidebarComponent,
    ToolbarComponent,
    MenuComponent,
  ]
})
export class NavbarModule { }
