import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-product-list",
  templateUrl: "product-list.html"
})
export class ProductListPage {
  //Dynamic Restaurant Details
  rest_images;
  rest_rating;
  rest_name;
  address;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // Getting the Data from Home Page using NavParams
    this.rest_images = this.navParams.get("restaurant").image;
    this.rest_name = this.navParams.get("restaurant").name;
    this.rest_rating = this.navParams.get("restaurant").rating;
  }
  ionViewWillEnter() {
    this.address = localStorage.getItem("deliveryAddress");
  }
  changeAddress() {
    this.navCtrl.push("NewAddressPage");
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad ProductListPage");
  }
}
