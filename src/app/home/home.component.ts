import { AddExpenseComponent } from "../add-expense/add-expense.component";
import { Component } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { Router } from "@angular/router";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  animal: string;
  name: string;

  constructor(public dialog: MatDialog, private router: Router) {
    console.log("HERE is called home component");
  }
}
