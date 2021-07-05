import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import staticdata from "../../assets/constantData/staticData.json";
import { User } from "../Models/user.model";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-fg-list",
  templateUrl: "./fg-list.component.html",
  styleUrls: ["./fg-list.component.css"],
})
export class FgListComponent implements OnInit {
  public user: User;
  headings = staticdata;

  public type: string;
  public groupList;
  public friendList: User[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.getUserSubscription().subscribe((user: User) => {
      this.user = user;
      console.log("user")
    });
    console.log("fg list call huaa ");
    this.route.params.subscribe((params) => {
      this.type = params["id"];
      console.log("ye call huaa : ", this.type);
      if (this.type == "Friends") {
        this.getAllFriendList(this.user?.friends);
        // this.friendList = this.headings.friends;
        this.groupList = [];
      } else if (this.type == "Groups") {
        this.groupList = this.headings.groups;
        this.friendList = [];
      }
      console.log("what type : ", params["id"]);
    });
  }

  getGroupMmeber(memberList) {
    return memberList.slice(1, 5).join(", ");
  }

  addNew() {
    if (this.type == "Groups") {
      console.log("in group");
      this.router.navigate(["/", "create-group"]);
      // [routerLink] = "type == Groups ? ['/create-group'] : ['/add-friend']"
      // this.route.naviage()
    } else if (this.type == "Friends") {
      console.log("in friend");
      this.router.navigate(["/", "add-friend"]);
    }
  }

  gotoChat(id) {
    console.log("phle id btaoo : ", id);
    this.router.navigate(["/chat", id]);
  }

  getAllFriendList(friends) {
    console.log("yha friends id ; ", friends);
  }
}
