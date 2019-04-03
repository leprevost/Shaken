import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation'; 

import { VisitUsPage } from '../visit-us/visit-us';


declare var google;


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  options : GeolocationOptions;
  currentPos : Geoposition;
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    public geolocation: Geolocation) {
  }
//close modal
closemodal(){
  this.viewCtrl.dismiss();
} //Enable positioning, and from that find the user
getUserPosition(){
  this.options = {
  enableHighAccuracy : false
  };
  this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {

      this.currentPos = pos;     

      console.log(pos);
      this.addMap(pos.coords.latitude,pos.coords.longitude);

  },(err : PositionError)=>{
      console.log("error : " + err.message);
  ;
  })
}
//When page loads, get users position
ionViewDidLoad() {
  this.getUserPosition();
}
//initialise the map centering on the user
addMap(lat,long){

  let latLng = new google.maps.LatLng(lat, long);

  let mapOptions = {
  center: latLng,
  zoom: 8,
  mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  this.addMarker();

}
//List of markers of Griffith Campuses
addMarker(){

  //First initialise the marker for the user and make it unique pin
  let marker = new google.maps.Marker({
  map: this.map,
  animation: google.maps.Animation.DROP,
  position: this.map.getCenter(),
  icon: {
    path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
    strokeColor: "blue",
    scale: 3}
  });
  let infoWindow = new google.maps.InfoWindow({
  content: '<span style="color:black;">This is your current position !</span>' 
  });
  infoWindow.open(this.map, marker);
  //Get Coords for campuses
  let goldCoastCampus = new google.maps.LatLng(-27.959349, 153.377987);
  let nathanCampus = new google.maps.LatLng(-27.5584808,153.04836969999997);
  let mtGravattCampus = new google.maps.LatLng(-27.5388557,153.0635446);
  let loganCampus = new google.maps.LatLng(-27.6646866,153.1509059);
  let southBankCampus = new google.maps.LatLng(-27.4816945,153.02423539999995);
  //place the pins on the map using the aforementioned coords
  let goldCoastCampusMarker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: goldCoastCampus
  });
  let nathanCampusMarker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: nathanCampus
  });
  let mtGravattCampusMarker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: mtGravattCampus
  });
  let loganCampusMarker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: loganCampus
  });
  let southBankCampusMarker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: southBankCampus
  });
  //Display information about campus and place it on the pin
  let goldCoastInfo = new google.maps.InfoWindow({
    content: '<span style="color: black;"> Gold Coast Campus </span>'
  });
  let southBankInfo = new google.maps.InfoWindow({
    content: '<span style="color: black;"> South Bank Campus </span>'
  });
  let mtGravattInfo = new google.maps.InfoWindow({
    content: '<span style="color: black;"> Mt Gravatt Campus </span>'
  });
  let loganInfo = new google.maps.InfoWindow({
    content: '<span style="color: black;"> Logan Campus </span>'
  });
  let nathanInfo = new google.maps.InfoWindow({
    content: '<span style="color: black;"> Nathan Campus </span>'
  });
  //If the user clicks a pin, they are taken to a new page
  google.maps.event.addListener(goldCoastCampusMarker, 'click', () => {
    let visitUsModal = this.modalCtrl.create(VisitUsPage);
    visitUsModal.present();
    });
  google.maps.event.addListener(mtGravattCampusMarker, 'click', () => {
    let visitUsModal = this.modalCtrl.create(VisitUsPage);
    visitUsModal.present();
    
    });
  google.maps.event.addListener(southBankCampusMarker, 'click', () => {
    let visitUsModal = this.modalCtrl.create(VisitUsPage);
    visitUsModal.present();
    });
  google.maps.event.addListener(loganCampusMarker, 'click', () => {
    let visitUsModal = this.modalCtrl.create(VisitUsPage);
    visitUsModal.present();
    });
  google.maps.event.addListener(nathanCampusMarker, 'click', () => {
    let visitUsModal = this.modalCtrl.create(VisitUsPage);
    visitUsModal.present();
    });
  
  //Display the info window by default
  goldCoastInfo.open(this.map, goldCoastCampusMarker);
  southBankInfo.open(this.map, southBankCampusMarker);
  mtGravattInfo.open(this.map, mtGravattCampusMarker);
  loganInfo.open(this.map, loganCampusMarker);
  nathanInfo.open(this.map, nathanCampusMarker);

}

}
