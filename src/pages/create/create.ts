import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {
  imageFile: string;
  title: string;
  ingredient: string;
  method: string;
  serves: number;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController,
    public viewCtrl: ViewController,
    public storage: Storage) {

    storage.get("imageFile").then(val =>
      this.imageFile = val);
    storage.get("title").then(val =>
      this.title = val);
    storage.get("method").then(val =>
      this.method = val);
    storage.get("ingredient").then(val =>
      this.ingredient = val);
    storage.get("serves").then(val =>
      this.serves = val);
  }
  //Click confirm to submit your cocktail
  confirmbtn(){
    let data = {title: this.title, method: this.method, ingredient: this.ingredient, serves: this.serves}
    this.viewCtrl.dismiss(data);
    }
    
  //Click fab/alert to clear the page
  clearbtn(){
    let alert = this.alertCtrl.create({
      subTitle: `Are you sure you want to <span class="pinktext">clear</span> your work?`,
      cssClass: 'createalert',
      buttons: ['Cancel','Okay']
    });
    alert.present();
    } 
    
}
