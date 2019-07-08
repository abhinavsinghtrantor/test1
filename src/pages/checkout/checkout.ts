import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-checkout",
  templateUrl: "checkout.html"
})
export class CheckoutPage {
  address;
  items;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad CheckoutPage");
  }
  ionViewWillEnter() {
    this.address = localStorage.getItem("deliveryAddress");
  }
  changeAddress() {
    this.navCtrl.push("NewAddressPage");
  }
  addNewCard() {
    this.navCtrl.push("AddCardPage");
  }
  OrderConfirm() {
    console.log("popup");
    let modal = this.modalCtrl.create("OrderDonePage");
    modal.onDidDismiss(() => {
      console.log("");
    });
    modal.present();
  }

  ngOnInit(){
    let cart = JSON.parse(localStorage['cart']);
    this.items = cart.items;
  }
}
