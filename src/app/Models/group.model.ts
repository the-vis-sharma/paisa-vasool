import { DocumentReference } from "@angular/fire/firestore";

export class Group {
  name?: string;
  createdDate: Date;
  iconUrl?: string;
  members: DocumentReference[];
  owner: DocumentReference;
  visibility: boolean;
  anonymous: string;
}
