import { Component, OnInit } from '@angular/core';
import { Menu, getMenu } from '../data/menu.data';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menus: Menu[] = [];
  constructor() { }

  ngOnInit() {
    this.menus = getMenu();
  }

}
