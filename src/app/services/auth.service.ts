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
  userData: any;
  public user: User;

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
      userData.id = user.uid;
      userData.profilePicUrl = user.photoURL;
      this.updateUserData(userData, userRef);
    }
  }

  public createUser(userData, userRef) {
    userRef
      .set({ ...userData }, { merge: true })
      .then((response) => {
        this.getUserSubscription().subscribe((user: User) => {
          console.log("yha pr user kya h 2 : ", user);
          this.addLocalStorage(user);
        });
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
        this.getUserSubscription().subscribe((user: User) => {
          console.log("yha pr user kya h 1 : ", user);
          this.addLocalStorage(user);
        });
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

  addLocalStorage(user: User) {
    user.friends[0].get().then((friend) => {
      console.log("friend: ", friend.data());
    });
    this.user.friends.map(item = > i)
    console.log("in addLocalStorage : ", user);
    localStorage.setItem("userId", user.id);
    localStorage.setItem("email", user.email);
    localStorage.setItem("phoneNumber", user.phoneNumber);
    localStorage.setItem("profilePicUrl", user.profilePicUrl);
    localStorage.setItem("createDate", JSON.stringify(user.createDate));
    localStorage.setItem("friends", JSON.stringify(user.friends));
    localStorage.setItem("groups", JSON.stringify(user.groups));
  }

  getLocalStrorage() {
    user: User;
    this.user.id = localStorage.getItem("userId");
    this.user.id = localStorage.getItem("email");
    this.user.id = localStorage.getItem("phoneNumber");
    this.user.id = localStorage.getItem("profilePicUrl");
    this.user.createDate = JSON.parse(localStorage.getItem("createDate"));
    this.user.friends = JSON.parse(localStorage.getItem("friends"));
    this.user.groups = JSON.parse(localStorage.getItem("groups"));
    return this.user;
  }
}
