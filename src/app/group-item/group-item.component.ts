import { Component, OnInit, Input } from '@angular/core';

export interface Section {
  name: string;
  image: string;
  owe: number;
  get: number;
}

@Component({
  selector: 'app-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.css'],
})
export class GroupItemComponent implements OnInit {
  @Input() group: Section;

  constructor() {}

  ngOnInit() {}
}
