import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-order-history",
  templateUrl: "order-history.html"
})
export class OrderHistoryPage {
  orders: string = "current";
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {}
  goDetails(rate) {
    this.navCtrl.push("OrderDetailsPage", { rate: rate });
  }
}
