import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { ToastController } from 'ionic-angular';
import { Device } from '@ionic-native/device';

/*
  Generated class for the PushNotificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PushNotificationProvider {
  constructor(public http: HttpClient, private push: Push, private device: Device, private toastCtrl: ToastController) {
    this.push.hasPermission().then((res: any) => {
      if (res.isEnabled) {
        console.log('We have permission to send push notifications');
      } else {
        this.presentToast('no tienes permisos para recibir notificaciones');
      }
    });
  }
  private presentToast(deviceData?: any, msg?) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 4000,
      position: 'top'
    });
    toast.present();
  }
  public async getDeviceInfo(): Promise<any> {
    let deviceData: any = {
      tipo: this.getPlatformDevice()
    };
    this.initializePushNotifications(deviceData);
  }
  private getPlatformDevice() {
    console.log('Device platform is: ' + this.device.platform);
    return this.device.platform;
  }
  public initializePushNotifications(deviceData) {
		const options: PushOptions = this.setPushNotificationsOptions();
		const pushObject: PushObject = this.push.init(options);

		pushObject.on('registration').subscribe((registration: any) => {
			deviceData.uuid = registration.registrationId;
			//this.setDeviceDataInBack(deviceData);
		});

		pushObject.on('notification').subscribe((notification: any) => {
			debugger;
			console.log(JSON.stringify(notification));
		});

		pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  }
  private setPushNotificationsOptions() {
		const options: PushOptions = {
			android: {},
			ios: {
				alert: 'true',
				badge: true,
				sound: 'false'
			},
			windows: {},
			browser: {}
		};
		return options;
	}
}
