import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import * as firebase from 'Firebase';

@IonicPage()
@Component({
  selector: 'page-add-room',
  templateUrl: 'add-room.html'
})
export class AddRoomPage {
  data = { roomname: '' };
  ref: firebase.database.Reference;
  userLoggedData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userLoggedData = this.navParams.get('userLoggedData');
    //this.ref = firebase.database().ref('/databases/{database}/documents');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddRoomPage');
  }

  addRoom() {
    try {
      firebase
        .database()
        .ref('/chatrooms/' + this.userLoggedData.user.uid)
        .set({
          provider: "anonymous",
          Auth: {
            uid: this.userLoggedData.user.uid,
            roomname: this.data.roomname          
          }
        }).then(data => { 
          this.navCtrl.pop();
        }).catch(err => { 
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }

  joinRoom(key) {
    this.navCtrl.setRoot(HomePage, {
      key: key,
      nickname: this.navParams.get('nickname')
    });
  }
}
export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });

  return returnArr;
};
