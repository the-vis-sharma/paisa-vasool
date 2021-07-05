import { Component, Input, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { User } from "../Models/user.model";

@Component({
  selector: "app-profile-sheet",
  templateUrl: "./profile-sheet.component.html",
  styleUrls: ["./profile-sheet.component.css"],
})
export class ProfileSheetComponent implements OnInit {
  @Input() user: User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    // console.log("profile call here user : ", this.user)
    // this.authService.getUserSubscription().subscribe((currentUser: User) => {
    //   this.user = currentUser;
    // });
  }

  signOut() {
    this.authService.signOut();
  }
}
