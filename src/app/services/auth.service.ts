import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import { Observable, of } from "rxjs";
import { User } from "../Models/user.model";
import { switchMap } from "rxjs/operators";
import { isNgTemplate } from '@angular/compiler';

@Injectable({
  providedIn: "root",
})
export class AuthService {
  user$: Observable<User>;

  constructor(
    private fireAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.getUserSubscription();
  }

  async googleSignin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.fireAuth.signInWithPopup(provider);
    var isNewUser = credential.additionalUserInfo.isNewUser;
    return this.addUserData(credential.user, isNewUser);
  }

  private addUserData(user, isNewUser) {
    const userRef: AngularFirestoreDocument<User> = this.firestore.doc(
      `user/${user.uid}`
    );
    const userData = new User();
    if (isNewUser) {
      userData.id = user.uid;
      userData.email = user.email;
      userData.name = user.displayName;
      userData.profilePicUrl = user.photoURL;
      userData.createDate = new Date();
      userData.friends = [];
      userData.groups = [];
      userData.phoneNumber = user.phoneNumber;
      this.createUser(userData, userRef);
    } else {
      userData.profilePicUrl = user.photoURL;
      this.updateUserData(userData, userRef);
    }
  }

  public createUser(userData, userRef) {
    userRef
      .set({ ...userData }, { merge: true })
      .then((response) => {
        this.router.navigate(["app"]);
      })
      .catch((error) => {
        console.log("erreor : ", error);
      });
  }

  public updateUserData(userData, userRef) {
    userRef
      .update({ ...userData })
      .then((response) => {
        this.router.navigate(["app"]);
      })
      .catch((error) => {
        console.log("erreor : ", error);
        this.router.navigate(["login"]);
      });
  }

  async signOut() {
    await this.fireAuth.signOut();
    this.router.navigate(["login"]);
  }

  getUserSubscription(): Observable<User> {
    return this.fireAuth.authState.pipe(
      switchMap((user) => {
        // Logged in
        if (user) {
          // localStorage.setItem("userId", user.i);
          return this.firestore.doc<User>(`user/${user.uid}`).valueChanges();
        } else {
          // Logged out
          this.router.navigate(["login"]);
          return of(null);
        }
      })
    );
  }

  saveUserLocalStorage(user: User) {
    // userDB.friends.forEach(friendRef => {
    //   friendRef.get().then(friendDoc => {
    //     currentUser.friends.push({ id: friendDoc.id, ...friendDoc.data(), friends: [], groups: [] } as User);
    //   });
    // });

  }

}
