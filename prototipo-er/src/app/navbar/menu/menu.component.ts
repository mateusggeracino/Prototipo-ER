import { Component, OnInit } from '@angular/core';
import { Menu, getMenu } from '../data/menu.data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menus: Menu[] = [];
  constructor(private router: Router) { }

  ngOnInit() {
    this.menus = getMenu();
  }

  toggleMenu(menu: Menu) {
    if (!menu.menus) {
      this.router.navigate([`/${menu.url}`]);
    }
  }
}
