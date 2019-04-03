import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  birthdate:any;
  uname: any;
  isToggled: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public viewCtrl: ViewController) {
    this.storage.get("birthdate").then((val) =>{
      this.birthdate = val;
    });  
    this.storage.get("uname").then((val) =>{
      this.uname = val;
    });
    this.storage.get("isToggled").then((val) =>{
      this.isToggled= val;
    });
  }
    //closes modal
    closemodal(){
      this.viewCtrl.dismiss();
    } 

}
