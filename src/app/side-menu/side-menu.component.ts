import { Component, Input, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

export interface Section {
  name: string;
  image: string;
  owe: number;
  get: number;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent implements OnInit {
  @Input() deviceSize: boolean;
  groupHeaderText: string;
  friendHeaderText: string;
  sideMenuList;
  groups: Section[] = [
    {
      name: 'Manali Trip',
      image:
        'https://static.india.com/wp-content/uploads/2018/08/The-road-from-Manali-to-' +
        'Rohtang-Pass-the-valley-of-Spiti-and-Leh-Himachal-Pradesh-India.jpg?impolicy=' +
        'Medium_Resize&w=1200&h=800',
      owe: 2000,
      get: 1000,
    },
    {
      name: 'Month Grocery',
      image:
        'https://static.india.com/wp-content/uploads/2018/08/The-road-from-Manali-to-Rohtang-' +
        'Pass-the-valley-of-Spiti-and-Leh-Himachal-Pradesh-India.jpg?impolicy=Medium_Resize&w=1200&h=800',
      owe: 2000,
      get: 1000,
    },
    {
      name: 'Shopping',
      image: '',
      owe: 2000,
      get: 1000,
    },
  ];
  friends: Section[] = [
    {
      name: 'Friend 1',
      image:
        'https://static.india.com/wp-content/uploads/2018/08/The-road-from-Manali-to-Rohtang-Pass-' +
        'the-valley-of-Spiti-and-Leh-Himachal-Pradesh-India.jpg?impolicy=Medium_Resize&w=1200&h=800',
      owe: 2000,
      get: 1000,
    },
    {
      name: 'Friend 1',
      image:
        'https://static.india.com/wp-content/uploads/2018/08/The-road-from-Manali-to-Rohtang-Pass-the-' +
        'valley-of-Spiti-and-Leh-Himachal-Pradesh-India.jpg?impolicy=Medium_Resize&w=1200&h=800',
      owe: 2000,
      get: 1000,
    },
    {
      name: 'Friend 1',
      image:
        'https://static.india.com/wp-content/uploads/2018/08/The-road-from-Manali-to-Rohtang-Pass-the-valley' +
        '-of-Spiti-and-Leh-Himachal-Pradesh-India.jpg?impolicy=Medium_Resize&w=1200&h=800',
      owe: 2000,
      get: 1000,
    },
  ];

  constructor(private breakpointObserver: BreakpointObserver) {}

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  ngOnInit() {
    this.groupHeaderText = 'Groups';
    this.friendHeaderText = 'Friends';
    this.sideMenuList = [
      {
        header: this.groupHeaderText,
        list: this.groups,
      },
      {
        header: this.friendHeaderText,
        list: this.friends,
      },
    ];
  }

  sideMenuDEsign() {
    const styles = {
      height: this.deviceSize ? 'fit-content' : '',
      padding: this.deviceSize ? '10px' : '',
    };
    return styles;
  }
}
