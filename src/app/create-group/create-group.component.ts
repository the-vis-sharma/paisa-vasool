import { Component, OnInit } from '@angular/core';
import staticdata from '../../assets/constantData/staticData.json';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {

  headings = staticdata;

  public friendList;

  constructor() { }

  ngOnInit() {
    this.friendList = this.headings.friends;
  }

}
