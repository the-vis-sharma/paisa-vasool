import { Component, OnInit, Input } from '@angular/core';

export interface Section {
  name: string;
  image: string;
  owe: number;
  get: number;
}

@Component({
  selector: 'app-side-menu-list-item',
  templateUrl: './side-menu-list-item.component.html',
  styleUrls: ['./side-menu-list-item.component.css'],
})
export class SideMenuListItemComponent implements OnInit {
  @Input() listItems: Section;
  @Input() headerText;
  constructor() {}

  ngOnInit() {}
}
