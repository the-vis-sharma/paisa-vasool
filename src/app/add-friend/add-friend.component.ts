import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-add-friend",
  templateUrl: "./add-friend.component.html",
  styleUrls: ["./add-friend.component.css"],
})
export class AddFriendComponent implements OnInit {
  emailForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.emailForm = fb.group({
      spendTitle: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}"),
        ]),
      ],
    });
  }

  ngOnInit() {}
}
