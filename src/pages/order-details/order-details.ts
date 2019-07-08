import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";

/**
 * Generated class for the OrderDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-order-details",
  templateUrl: "order-details.html"
})
export class OrderDetailsPage {
  name;
  haveRate: boolean;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad OrderDetailsPage");
  }
  ionViewWillEnter() {
    if (this.navParams.get("rate") == "yes") {
      this.haveRate = false;
    } else {
      this.haveRate = true;
    }
  }
  report() {
    console.log("report an issue");
    let message = this.toastCtrl.create({
      message: "Reported As Issue",
      duration: 1000,
      position: "bottom"
    });
    message.present();
  }
}
