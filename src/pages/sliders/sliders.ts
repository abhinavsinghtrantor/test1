import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sliders',
  templateUrl: 'sliders.html',
})
export class SlidersPage {
  slides = [
    {
      title: "Order",
      description: "Order all you want from your <br> favorite store.",
      image: "assets/imgs/slider1.jpg",
    },
    {
      title: "Pick Delivery Time",
      description: "Receive your order in less than 1 hour. <br> Or Pick a specific delivery time.",
      image: "assets/imgs/slider2.jpg",
    },
    {
      title: "Get Your Order",
      description: "Real-time tracking will keep your posted <br> about order progress.",
      image: "assets/imgs/slider3.jpg",
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidersPage');
  }
  goLogin(){
    this.navCtrl.setRoot('LoginPage')
  }
}
