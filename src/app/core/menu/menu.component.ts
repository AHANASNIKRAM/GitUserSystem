import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @ViewChild('submenu')
  set subMenu(value: MatMenu) {
   // this.menuItems[1].elementRef = value;
  };

  public selected: string | undefined;

  menuItems: Array<{ text: string; elementRef: MatMenu, path: string }> = [
  ];

  select(pText: string) {
    this.selected = pText;
    console.log(pText);
  }
}
