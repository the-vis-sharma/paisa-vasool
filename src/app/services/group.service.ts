import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Group } from "../Models/group.model";

@Injectable({
  providedIn: "root",
})
export class GroupService {
  constructor(private firestore: AngularFirestore) { }

  createGroup(group: Group) {
    return this.firestore.collection("group").add({ ...group });
  }

}
