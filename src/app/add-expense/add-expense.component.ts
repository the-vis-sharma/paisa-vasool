import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import {
  MatAutocompleteSelectedEvent,
  MatAutocomplete,
} from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import staticdata from '../../assets/constantData/staticData.json';
import { Expence } from '../Models/expence';
import { Group } from '../Models/group';
import { Friend } from '../Models/friend';
import moment from 'moment';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css'],
})

export class AddExpenseComponent implements OnInit {
  headings = staticdata;
  expecceObject: Expence = {};
  public groupList: Group[] = [];
  public friendList: Friend[] = []
  public selectedGroupId: string = ""; // selct group id 
  public selectedFriedList = []; // common for both friend and group
  public selectedFriendIdList = []; //fried Id list

  expenceForm: FormGroup;

  //tags
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredTags: Observable<string[]>;
  tags: string[] = [];
  allTags: string[] = this.headings.tags;
  @ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  step = 0;

  public isExpence: boolean = true;
  public showExpenceForm: boolean = true;
  public showSplitBetween: boolean = false;
  public showFriendList: boolean = true;
  public showGroupList: boolean = false;
  public showSplitAmount: boolean = false

  vaildationsMapping = {
    spendTitle: [""],
    spendAmout: [""],
    spendCreateDate: [""],
    catagory: [""],
    tag: [""],
    expenceType: [true]
  }

  constructor(private fb: FormBuilder) {
    this.expenceForm = fb.group({
      spendTitle: this.vaildationsMapping.spendTitle,
      spendAmout: this.vaildationsMapping.spendAmout,
      spendCreateDate: this.vaildationsMapping.spendCreateDate,
      catagory: this.vaildationsMapping.catagory,
      tag: this.vaildationsMapping.tag,
      expenceType: this.vaildationsMapping.expenceType
    });
    this.filteredTags = this.expenceForm.get("tag").valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => {
        return tag ? this.filterTag(tag) : this.allTags.slice()
      }
      ));

  }

  ngOnInit() {
    this.groupList = this.headings.groups.map(group => {
      group.members = this.headings.friends;
      return group;
    });
    this.friendList = this.headings.friends;
  }


  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Add our fruit
    if (value) {
      this.tags.push(value);
    }

    // Clear the input value
    // event.chipInput!.clear();
    event.value = ""
    this.expenceForm.get("tag").setValue(null);
  }


  remove(fruit: string): void {
    const index = this.tags.indexOf(fruit);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }


  selected(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.viewValue);
    this.tagInput.nativeElement.value = '';
    this.expenceForm.get("tag").setValue(null);
  }

  private filterTag(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allTags.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }

  public getSplitBetween(result: string): void {
    if (result == "friend") {
      this.showFriendList = true;
      this.showGroupList = false;
    }
    else {
      this.showFriendList = false;
      this.showGroupList = true;
    }
  }

  addCurrentTime(date) {
    const _ = moment();
    const dateWithTime = moment(date).add({ hours: _.hour(), minutes: _.minute(), seconds: _.second() })
    return dateWithTime.toString();
  }

  nextToSplit() {
    this.expecceObject = {
      "spendTitle": this.expenceForm.get("spendTitle").value,
      "spendAmout": this.expenceForm.get("spendAmout").value,
      "spendCreateDate": this.addCurrentTime(this.expenceForm.get("spendCreateDate").value),
      "catagory": this.expenceForm.get("catagory").value,
      "tag": this.tags.toString(),
      "expenceType": this.expenceForm.get("expenceType").value
    }
    console.log("now object is : ", this.expecceObject);
    this.showSplitBetween = true;
    this.showExpenceForm = false;
    this.showSplitAmount = false;
  }

  selectdFriend(event, friend) {
    if (event.checked) {
      this.selectedFriendIdList.push(friend);
    }
    else {
      const index = this.selectedFriendIdList.indexOf(friend);
      this.selectedFriendIdList.splice(index, 1)
    }

  }

  splitAmount() {
    this.showSplitBetween = false;
    this.showExpenceForm = false;
    this.showSplitAmount = true;
    if (this.selectedGroupId) {
      const group = this.groupList.filter(group => group.groupId == this.selectedGroupId);
      this.selectedFriedList = group[0].members
    }
    else if (this.selectedFriendIdList.length > 0) {
      this.selectedFriedList = this.friendList.filter(friend => this.selectedFriendIdList.includes(friend.id));
    }
  }


  getGroupMmeber(memberList) {
    return memberList.slice(1, 5).map(member => member["name"]).join(", ");
  }


  getGroupId(group) {
    this.selectedGroupId = group;
  }




  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}

