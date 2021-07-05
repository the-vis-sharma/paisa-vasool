import { Component, Input, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Router } from '@angular/router';
import staticdata from '../../assets/constantData/staticData.json';
import { User } from '../Models/user.model';
import { AuthService } from '../services/auth.service';


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


  public user: User;


  headings = staticdata;
  @Input() deviceSize: boolean;
  groupHeaderText: string;
  friendHeaderText: string;
  sideMenuList;
  public groups;
  public friends: User[] = [];

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private authService: AuthService) { }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  ngOnInit() {
    this.authService.getUserSubscription().subscribe((currentUser: User) => {
      this.user = currentUser;
      this.getFriendList(this.user);
    });
    // this.groups = this.headings.sidemeanuGroup;
    // this.friends = this.headings.sidemeanuFriend;
    // this.groupHeaderText = 'Groups';
    // this.friendHeaderText = 'Friends';
    // this.sideMenuList = [
    //   {
    //     header: this.groupHeaderText,
    //     list: this.groups,
    //   },
    //   {
    //     header: this.friendHeaderText,
    //     list: this.friends,
    //   },
    // ];
  }

  sideMenuDEsign() {
    const styles = {
      height: this.deviceSize ? 'fit-content' : '',
      padding: this.deviceSize ? '10px' : '',
    };
    return styles;
  }

  getFriendList(user: User) {
    console.log("in get friend list here user : ", user)
    user.friends.forEach(friendRef => {
      friendRef.get().then(friendDoc => {
        this.friends.push({ id: friendDoc.id, ...friendDoc.data(), friends: [], groups: [] } as User);
      });
    });
    console.log("now update friend List : ", this.friends);
    this.updateSideMenuList();
  }

  updateSideMenuList() {
    this.sideMenuList = [
      {
        header: 'Groups',
        list: this.groups,
      },
      {
        header: 'Friends',
        list: this.friends,
      },
    ];
  }

}
