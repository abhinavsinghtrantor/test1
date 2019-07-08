import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'chatbot',
  templateUrl: 'chat.html',
})
export class ChatBot {
  
  msgs;
  chatMsg;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FiltersPage');
  }
  
  clear(){
  
    console.log('clear');
  }

  sendChat(){
    this.msgs.push(this.chatMsg);
    let msg = {type : "in", text : this.chatMsg};
    this.msgs.push(msg);
    this.chatMsg = "";
  }

  ngOnInit(){
    this.msgs = [];
    let msg = {type : "in", text : "Hello, How can i help you?"};
    this.msgs.push(msg);
  }
}
