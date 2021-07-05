import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddExpenseComponent } from "./add-expense/add-expense.component";
import { AddFriendComponent } from "./add-friend/add-friend.component";
import { ChatComponent } from "./chat/chat.component";
import { CreateGroupComponent } from "./create-group/create-group.component";
import { FgListComponent } from "./fg-list/fg-list.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "app",
    component: DashboardComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "add-expense", component: AddExpenseComponent },
      { path: "create-group", component: CreateGroupComponent },
      { path: "add-friend", component: AddFriendComponent },
      { path: "chat/:id", component: ChatComponent },
      { path: "home/:id", component: FgListComponent },
      { path: "", redirectTo: "home", pathMatch: "full" },
    ],
  },
  { path: "", redirectTo: "app", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
