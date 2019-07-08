import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { host } from "../../config/config";

@IonicPage()
@Component({
  selector: "page-order-history",
  templateUrl: "order-history.html"
})
export class OrderHistoryPage {
  orders: string = "current";
  corders;
  constructor(public navCtrl: NavController, private http : HttpClient) {}

  ionViewDidLoad() {}
  goDetails(rate) {
    this.navCtrl.push("OrderDetailsPage", { rate: rate });
  }

  ngOnInit(){
    debugger;
    this.http.get(host+"/getOrders").toPromise()
    .then(data => {
      this.corders = data['orders'];
    })
  }
}
