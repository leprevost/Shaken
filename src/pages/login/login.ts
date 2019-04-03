import { Component } from '@angular/core';
import { IonicPage, 
  NavController, 
  ModalController, 
  ViewController, 
  AlertController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { AuthService } from '../../services/auth.services';
import { Storage } from '@ionic/storage';

import { ContactPage } from '../contact/contact';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  
})

export class LoginPage {

  li = [];
  constructor(
  public navCtrl: NavController,
  public auth: AuthService,
  viewCtrl: ViewController,
  public modalCtrl: ModalController,
  public alertCtrl: AlertController,
  public storage: Storage
) {


}
  //Goto signup page
signpageshow(){
  let signupPageModal = this.modalCtrl.create(SignupPage);
  signupPageModal.onDidDismiss(data =>{
    this.li.push(data);
  });
  signupPageModal.present();
  }

//Present Modal page for the Contact Page
contanctpagemodal(){
  let contactmodal = this.modalCtrl.create(ContactPage);
  contactmodal.present();
}
//Present Home Screen and display a warning for responsible drinking
tabspageshow(){
  this.navCtrl.push(TabsPage);
  let alert = this.alertCtrl.create({
    //title: 'Health Warning!',

    subTitle: `Please remember to drink responsibily. For more information please visit 
    <a href='#' (click)="launchurl('https://drinkwise.org.au')">https://drinkwise.org.au</a>`,
    cssClass: 'alertstyle',
    buttons: ['Dismiss']
  });
  alert.present();
  }
//Logs when the url is clicked. Will diplay ling in log (NB, is sanatized)
launchurl(url){
  console.log('https://drinkwise.org.au');
  
}
}
