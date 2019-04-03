import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  birthdate:any;
  uname: any;
  imageFile: string;
  isToggled: boolean;
  password: string;
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    modalCtrl: ModalController, 
    public viewCtrl: ViewController,
    public storage: Storage
    ) {

      this.storage.get("uname").then((val) =>{
        this.uname = val;
      });
      storage.get("imageFile").then(val =>
        this.imageFile = val);
      this.storage.get("isToggled").then((val) =>{
        this.isToggled= val;
      });
      this.storage.get("birthdate").then((val) =>{
        this.birthdate= val;
      });
      this.storage.get("password").then((val) =>{
        this.password= val;
      });
  }
  //Return to login page
  logpageshow(){
    let data = {uname: this.uname, password: this.password}
    this.viewCtrl.dismiss(data);
  }//read and convert image to the image path url
  imageSelected(files) {
    let fileReader = new FileReader();
    fileReader.onload = e => {
      this.imageFile = fileReader.result;
      this.storage.set('imageFile', this.imageFile);
      
    };//read first image
    fileReader.readAsDataURL(files[0]);
    
  } //save username
  newName(){
    this.storage.set("uname",this.uname);
  }//save toggle N.B SET TO DEFAULT TO FALSE 
  saveNot(){
    this.storage.set("isToggled", this.isToggled);
  }//Save date that can be found at visit us page
  saveDate(){
    this.storage.set("birthdate", this.birthdate);
  }
  savePwd(){
    this.storage.set("password", this.password);
  }
}
