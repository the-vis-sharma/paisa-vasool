import { DocumentReference } from "@angular/fire/firestore";

export class Notification {
  dateTime?: Date;
  message?: string;
  readReceips?: DocumentReference[];
  reciver?: DocumentReference[];
  sender?: DocumentReference[];
}
