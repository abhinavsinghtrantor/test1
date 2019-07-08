import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-user-home",
  templateUrl: "user-home.html"
})
export class UserHomePage {
  restaurants = [
    {
      name: "Delmonico Steak",
      time: "15",
      address: "Authentic Japanese 66 Park Ave",
      openign_time: "9 am - 10 pm",
      star: "4",
      rating: "4.4 (232)",
      image: "assets/imgs/slider2.jpg"
    },
    {
      name: "Molyvos",
      time: "25",
      address: "Areek 871 7th Ave",
      openign_time: "Closed",
      star: "5",
      rating: "4.3 (232)",
      image: "assets/imgs/slider3.jpg"
    },
    {
      name: "Delmonico Steak",
      time: "15",
      address: "Authentic Japanese 66 Park Ave",
      openign_time: "9 am - 10 pm",
      star: "5",
      rating: "4.6 (232)",
      image: "assets/imgs/slider1.jpg"
    },
    {
      name: "Trattoria Bianca",
      time: "35",
      address: "Italian 481 8th Ave",
      openign_time: "8 am - 11 pm",
      star: "3",
      rating: "4.1 (123)",
      image: "assets/imgs/slider2.jpg"
    },
    {
      name: "Henry at Life Hotel",
      time: "15",
      address: "African 19 W 31st St",
      openign_time: "10 am - 12 pm",
      star: "4",
      rating: "4.8 (323)",
      image: "assets/imgs/slider3.jpg"
    }
  ];
  address: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  goProductList(restaurant: any) {
    console.log("products", restaurant);
    this.navCtrl.push("ProductListPage", { restaurant: restaurant });
  }
  filter() {
    this.navCtrl.push("FiltersPage");
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
