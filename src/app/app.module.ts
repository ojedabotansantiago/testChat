import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ConstantsProvider } from '../providers/constants/constants';
import { SigninPage } from '../pages/signin/signin';
import { RoomPage } from '../pages/room/room';
import { AddRoomPage } from '../pages/add-room/add-room';
import { SigninPageModule } from '../pages/signin/signin.module';
import { PushNotificationProvider } from '../providers/push-notification/push-notification';
import { Push } from '@ionic-native/push';
import { Device } from '@ionic-native/device';
SigninPageModule
@NgModule({
  declarations: [MyApp, HomePage, SigninPage, RoomPage, AddRoomPage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, SigninPage, RoomPage, AddRoomPage],
  providers: [StatusBar, SplashScreen, Push, Device,{ provide: ErrorHandler, useClass: IonicErrorHandler }, ConstantsProvider,
    PushNotificationProvider]
})
export class AppModule {}
