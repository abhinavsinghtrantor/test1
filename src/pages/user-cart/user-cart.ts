import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-user-cart",
  templateUrl: "user-cart.html"
})
export class UserCartPage {
  address;
  items;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad UserCartPage");
  }
  checkout() {
    this.navCtrl.push("CheckoutPage");
  }
  ionViewWillEnter() {
    this.address = localStorage.getItem("deliveryAddress");
  }
  changeAddress() {
    this.navCtrl.push("NewAddressPage");
  }

  ngOnInit(){
    let cart = JSON.parse(localStorage['cart']);
    this.items = cart.items;
  }
}
