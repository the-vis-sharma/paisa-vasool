import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { User } from "../Models/user.model";

@Component({
  selector: "app-profile-sheet",
  templateUrl: "./profile-sheet.component.html",
  styleUrls: ["./profile-sheet.component.css"],
})
export class ProfileSheetComponent implements OnInit {
  public user: User;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.user = this.authService.getLocalStrorage();
    // this.authService.getUserSubscription().subscribe((user: User) => {
    //   this.user = user;
    // });
    console.log("ab user kya AATA : ", this.user);
  }

  signOut() {
    this.authService.signOut();
  }
}
