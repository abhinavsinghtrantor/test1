import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  AlertController,
  App
} from "ionic-angular";

/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-user-profile",
  templateUrl: "user-profile.html"
})
export class UserProfilePage {
  profilePicture: string;
  profileRef: any;
  errorMessage: any;
  placeholderPicture = "https://api.adorable.io/avatar/200/bob";

  enableNotifications = true;
  language: any;
  currency: any;
  paymentMethod: any;

  languages = ["English", "Portuguese", "French"];
  paymentMethods = ["Paypal", "Credit Card"];
  currencies = ["USD", "BRL", "EUR"];

  user = {
    name: "John Doe",
    imageUrl: "assets/imgs/pic.png"
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController,
    private app: App
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad UserProfilePage");
  }
  toggleNotifications() {
    if (this.enableNotifications) {
      let message = this.toastCtrl.create({
        message: "Notifications enabled.",
        duration: 1000,
        position: "bottom"
      });
      message.present();
    } else {
      let message = this.toastCtrl.create({
        message: "Notifications disabled..",
        duration: 1000,
        position: "bottom"
      });
      message.present();
    }
  }

  logOut() {
    // this.navCtrl.setRoot("LoginPage");
    this.app.getRootNav().setRoot("LoginPage");
  }
}
