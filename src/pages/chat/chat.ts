import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})

export class Chat {

  chat: FirebaseListObservable<any>;
  message: string;

  today: number = Date.now();

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {

    this.chat = db.list('https://fir-chat-12ae8.firebaseio.com');
  }

  send() {
    let m = {
      text: this.message,
      date: this.today
    };

    this.chat.push(m).then(() => {
      this.message = "";
    })

  }

}
