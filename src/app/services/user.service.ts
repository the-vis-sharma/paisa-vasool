import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { User } from "../Models/user.model";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private firestore: AngularFirestore) {}

  getAllUserDetails() {
    return this.firestore.collection("user").snapshotChanges();
  }

  createNewUser(user: User) {
    return this.firestore.collection("user").add(user);
  }

  updateUserDetails(user: User) {
    delete user.id;
    this.firestore.doc("user/" + user.id).update(user);
  }

  deleteUser(userId: string) {
    this.firestore.doc("user/" + userId).delete();
  }
}
