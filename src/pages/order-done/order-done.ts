import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";
import { TabsPage } from "../tabs/tabs";

/**
 * Generated class for the OrderDonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-order-done",
  templateUrl: "order-done.html"
})
export class OrderDonePage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad OrderDonePage");
  }
  goOrders() {
    this.viewCtrl.dismiss();
    this.navCtrl.push("OrderHistoryPage");
  }
  Shopping() {
    this.navCtrl.setRoot(TabsPage);
  }
}
