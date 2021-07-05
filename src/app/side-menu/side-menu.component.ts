import { Component, Input, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Router } from '@angular/router';
import staticdata from '../../assets/constantData/staticData.json';


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

  headings = staticdata;
  @Input() deviceSize: boolean;
  groupHeaderText: string;
  friendHeaderText: string;
  sideMenuList;
  public groups;
  public friends;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) { }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  ngOnInit() {

    this.groups = this.headings.sidemeanuGroup;
    this.friends = this.headings.sidemeanuFriend;
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
