import { DocumentReference } from "@angular/fire/firestore";

export class User {
  id: string;
  createDate: Date;
  email: string;
  name: string;
  phoneNumber?: string;
  profilePicUrl?: string;
  friends: DocumentReference[];
  groups: DocumentReference[];
}
