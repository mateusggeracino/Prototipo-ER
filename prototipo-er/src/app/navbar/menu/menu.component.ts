import { Component, OnInit } from '@angular/core';
import { Menu, getMenu } from '../data/menu.data';
import { Router } from '@angular/router';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menus: Menu[] = [];
  showBlackGround = false;
  constructor(private router: Router) { }

  ngOnInit() {
    this.menus = getMenu();
  }

  toggleMenu(menu: Menu, subMenu: boolean) {
    if (subMenu) {
      this.router.navigate([`/${menu.url}`]);
      return;
    }

    if (!menu.menus) {
      this.router.navigate([`/${menu.url}`]);
      this.menus.forEach(x => x.ativo = false);
      menu.ativo = true;
      return;
    }

    if (menu.menus) {
      this.menus.forEach(x => x.ativo = false);
    }

    menu.ativo = !menu.ativo;
  }

  openDrawer(drawer: MatDrawer) {
    drawer.toggle();
    if (drawer.opened) {
      this.showBlackGround = true;
    } else {
      this.showBlackGround = false;
    }
  }

  close(drawer: MatDrawer) {
    drawer.toggle();
    this.showBlackGround = false;
  }
}
