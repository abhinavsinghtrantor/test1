import { Component, ViewChild, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

declare var google;

@IonicPage()
@Component({
  selector: "page-new-address",
  templateUrl: "new-address.html"
})
export class NewAddressPage {
  @ViewChild("map") mapElement: ElementRef;
  map: any;
  autocomplete: any;
  autocompleteItems: any;
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    let latLng = new google.maps.LatLng(-34.929, 138.601);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }
  detail(address) {
    console.log("adddress", address);
    localStorage.setItem("deliveryAddress", address.description);
    this.navCtrl.pop();
  }
}
