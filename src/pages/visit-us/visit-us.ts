import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-visit-us',
  templateUrl: 'visit-us.html',
})
export class VisitUsPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  //Closes modal
  closemodal(){
    this.viewCtrl.dismiss();
  } 
}
