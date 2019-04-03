import { Component } from '@angular/core';
import { NavController, PopoverController, ModalController, ViewController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  uname: any;
  imageFile: string;

  constructor(public navCtrl: NavController, 
    public popoverCtrl: PopoverController, 
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    public storage: Storage
  ) {
  
    this.storage.get("uname").then((val) =>{
      this.uname = val;
    });
    storage.get("imageFile").then((val =>
      this.imageFile = val));
  }

//Create the popupmenu when the 3 dots button is clicked
popovermenu(myEvent) {
  let popover = this.popoverCtrl.create(PopoverPage);
  popover.present({
    ev: myEvent
  });
}


}
