import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CreatePage } from '../create/create';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  visible = false;
  cocktails = [
    {title: 'Vodka', ingredient: 'Vodka', method:'Vodka', serves: '2'},
    {title: 'Whisky', ingredient: 'Whisky', method:'Whisky', serves: '1'},
    {title: 'Rum', ingredient: 'Rum', method:'Rum', serves: '3'},
    {title: 'Tequila', ingredient: 'Tequila', method:'Tequila', serves: '1'},
    {title: 'Beer', ingredient: 'Beer', method:'Beer', serves: '1'}
];
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public modalCtrl: ModalController,) {
  }

  toggle() {//Condition to switch between true and false
    this.visible = !this.visible;
  }//Push the data from the modal onto the page
  createpagemodal(){
    let createpagemodal = this.modalCtrl.create(CreatePage);
    createpagemodal.onDidDismiss(data =>{
      this.cocktails.push(data);
    });
    createpagemodal.present();
  }//Delete item that is currently selected
  deleteItem(index){
    this.cocktails.splice(index, 1);
  }


}
