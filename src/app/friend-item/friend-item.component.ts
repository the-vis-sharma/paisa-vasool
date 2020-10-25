import { Component, OnInit, Input } from '@angular/core';

export interface Section {
  name: string;
  image: string;
  owe: number;
  get: number;
}

@Component({
  selector: 'app-friend-item',
  templateUrl: './friend-item.component.html',
  styleUrls: ['./friend-item.component.css'],
})
export class FriendItemComponent implements OnInit {
  constructor() {}

  @Input() friend: Section;

  ngOnInit() {}
}
