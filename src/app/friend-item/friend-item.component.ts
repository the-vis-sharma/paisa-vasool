import { Component, OnInit, Input } from '@angular/core';
import { User } from '../Models/user.model';


@Component({
  selector: 'app-friend-item',
  templateUrl: './friend-item.component.html',
  styleUrls: ['./friend-item.component.css'],
})
export class FriendItemComponent implements OnInit {
  constructor() { }

  @Input() friend: User;

  ngOnInit() { }
}
