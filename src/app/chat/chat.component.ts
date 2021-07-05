
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import staticdata from '../../assets/constantData/staticData.json';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  headings = staticdata;

  public msgList;
  msgForm: FormGroup;


  vaildationsMapping = {
    msg: [""]
  }


  constructor(private fb: FormBuilder) {
    this.msgForm = fb.group({
      msg: this.vaildationsMapping.msg,

    });
  }

  ngOnInit() {
    this.msgList = this.headings.spendList;
  }

  sendMsg() {
    this.msgList.push(this.msgForm.get("msg").value)
    this.msgForm.get("msg").setValue("");
  }

}
