import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConstantsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConstantsProvider {
  public static  fireBaseConfig = {
    apiKey: "AIzaSyCTWQHz5gcvDglHkoMgt0_kgELrtNlfz5g",
    authDomain: "myfabulouschat.firebaseapp.com",
    databaseURL: "https://myfabulouschat.firebaseio.com",
    projectId: "myfabulouschat",
    storageBucket: "myfabulouschat.appspot.com",
    messagingSenderId: "886889505076"
  };
  constructor(public http: HttpClient) {
    console.log('Hello ConstantsProvider Provider');    
  }  
}
