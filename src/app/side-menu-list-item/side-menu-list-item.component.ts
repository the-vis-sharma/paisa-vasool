import { Component, OnInit, Input } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { AddFriendComponent } from "../add-friend/add-friend.component";

export interface Section {
  name: string;
  image: string;
  owe: number;
  get: number;
}

@Component({
  selector: "app-side-menu-list-item",
  templateUrl: "./side-menu-list-item.component.html",
  styleUrls: ["./side-menu-list-item.component.css"],
})
export class SideMenuListItemComponent implements OnInit {
  @Input() listItems: Section;
  @Input() headerText;
  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit() {}

  public seeAll(type) {
    console.log("yha pr type : ", type);
    this.router.navigate(["app", "home", type]);
  }

  addFriend() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    // dialogConfig.data = {
    //   title: this.headings.task.updateTask.releaseTitle,
    //   message: this.headings.task.updateTask.releaseMessage,
    //   type: "Release",
    //   isDisable: true,
    // };
    dialogConfig.minWidth = 400;
    const result = this.dialog.open(AddFriendComponent, dialogConfig);
    result.afterClosed().subscribe((res) => {
      console.log("result is : ", res);
      // if (res.result) {
      //   this.taskData.userAction = "Reserved",
      //     this.submitTaskDetails();
      // }
    });
  }
}
