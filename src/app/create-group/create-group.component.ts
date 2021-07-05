import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Group } from '../Models/group.model';
import { User } from '../Models/user.model';
import { AuthService } from '../services/auth.service';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {

  public user: User;
  public friendList: User[] = [];
  groupForm: FormGroup;
  public selectFriend = [];
  public group: Group;

  vaildationsMapping = {
    groupName: ["", Validators.compose([Validators.required])],
    members: ["", Validators.compose([Validators.required])],
    visibility: [true],
    anonymous: [false],
  }

  constructor(private authService: AuthService, private fb: FormBuilder, private firestore: AngularFirestore,
    private groupService: GroupService) {
    this.groupForm = fb.group({
      groupName: this.vaildationsMapping.groupName,
      members: this.vaildationsMapping.members,
      visibility: this.vaildationsMapping.visibility,
      anonymous: this.vaildationsMapping.anonymous
    });

  }

  ngOnInit() {
    this.authService.getUserSubscription().subscribe((currentUser: User) => {
      this.user = currentUser;
      this.getFriendList(this.user);
    });
  }

  getFriendList(user: User) {
    this.friendList = [];
    user.friends.forEach(friendRef => {
      friendRef.get().then(friendDoc => {
        this.friendList.push({ id: friendDoc.id, ...friendDoc.data(), friends: [], groups: [] } as User);
      });
    });
  }
  selectdFriend(event, id) {
    if (event.checked) {
      this.selectFriend.push(id)
    }
    else {
      const index: number = this.selectFriend.indexOf(id);
      if (index !== -1) {
        this.selectFriend.splice(index, 1);
      }
    }
    console.log("final friend list : ", this.selectFriend)
  }

  createGroup() {
    console.log("group name : ", this.groupForm.get('groupName').value)
    this.group = new Group();
    this.group.name = this.groupForm.get('groupName').value;
    this.group.createdDate = new Date();

    const currentUserRef: DocumentReference<User> = this.firestore.doc<User>(
      `user/${this.user.id}`
    ).ref;
    this.group.owner = currentUserRef;
    this.group.members = this.selectFriend.map(friendId => this.firestore.doc<User>(
      `user/${friendId}`
    ).ref)
    this.group.visibility = this.groupForm.get('visibility').value;
    this.group.anonymous = this.groupForm.get('anonymous').value;
    console.log("group model : ", this.group)
    this.groupService.createGroup(this.group).then(res => {
      console.log("Group is created ......!!!!!");
    }).catch((error) => {
      console.log("erreor : ", error);
    });
  }
}
