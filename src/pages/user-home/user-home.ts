import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { host } from "../../config/config";

@IonicPage()
@Component({
  selector: "page-user-home",
  templateUrl: "user-home.html"
})
export class UserHomePage {
  restaurants : any;
  address: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {}
  ngOnInit(){
    let cart = {items : [], tPrice : 0};
    localStorage['cart'] = JSON.stringify(cart);
    localStorage['userMobile'] = "0000000000";

    this.http.get(host+"/getRestaurents", {}).toPromise()
  .then(data => {
    this.restaurants = data['restaurants'];
    console.log(data); // data received by server

  })
  }
  goProductList(restaurant: any) {
    console.log("products", restaurant);
    this.navCtrl.push("ProductListPage", { restaurant: restaurant });
  }
  filter() {
    this.navCtrl.push("ChatBot");
  }
  ionViewWillEnter() {
    this.address = localStorage.getItem("deliveryAddress");
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad UserHomePage");
  }
  changeAddress() {
    this.navCtrl.push("NewAddressPage");
  }
}
