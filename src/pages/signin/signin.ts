import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoomPage } from '../room/room';
import firebase from 'firebase';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  public data = { nickname: '', password: '' };

  public dataRegister = {
    email:'',
    password:''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }
 
  enterNickname() {
    firebase.auth().signInWithEmailAndPassword(this.data.nickname, this.data.password).then(data => { 
      this.navCtrl.setRoot(RoomPage, {
        nickname: this.data.nickname,
        userLoggedData : data
      });
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

  }
  public createUser() { 
    let email = this.dataRegister.email;
    let password = this.dataRegister.password
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }
}
