import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { host } from "../../config/config";

@IonicPage()
@Component({
  selector: "page-product-list",
  templateUrl: "product-list.html"
})
export class ProductListPage {
  
  rest_images;
  rest_rating;
  rest_name;
  address;
  items;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
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

  ngOnInit(){
    this.items = [];
    this.http.get(host + "/getItems").toPromise()
    .then(data => {
      this.items = data['items'];
    })
  }

  add(){
    let cart = JSON.parse(localStorage['cart']);
    let items = cart.items;
    let item = {title : "Indian Tadka", price : "Rs. 150"};
    items.push(item);
    cart.items = items;
    localStorage['cart'] = JSON.stringify(cart);
    alert("Item added successfully");
  }

  goCart(){
    this.navCtrl.push("UserCartPage");
  }
}
