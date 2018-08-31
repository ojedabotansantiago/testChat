import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { HomePage } from '../pages/home/home';
import { ConstantsProvider } from '../providers/constants/constants';
import { SigninPage } from '../pages/signin/signin';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public rootPage: any = SigninPage;

  private firebaseConfig = ConstantsProvider.fireBaseConfig;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(this.firebaseConfig);
    firebase.auth().signInAnonymously().catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }
}

