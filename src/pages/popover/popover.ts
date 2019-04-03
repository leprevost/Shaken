import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App, ModalController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ContactPage } from '../contact/contact';
import { ProfilePage } from '../profile/profile';


@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html'
})
export class PopoverPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams, 
    public viewCtrl: ViewController,
    public appCtrl: App,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController) {
  }

//display modal page for contact page
contanctpagemodal(){
  let contactmodal = this.modalCtrl.create(ContactPage);
  contactmodal.present();
  this.viewCtrl.dismiss();
}
//display modal page for profile
profilepagemodal(){
  let profilemodal = this.modalCtrl.create(ProfilePage);
  profilemodal.present();
  this.viewCtrl.dismiss();
}
//Return to login page
logout(){
  let alert = this.alertCtrl.create({
    subTitle: `Are you sure you want to <span class="pinktext">logout</span>?`,
    cssClass: 'logoutalert',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Logout',
        handler: () => {
          this.appCtrl.getRootNav().push(LoginPage);
        }
      }
    ]
  });
  alert.present();
  this.viewCtrl.dismiss();
}
} 
