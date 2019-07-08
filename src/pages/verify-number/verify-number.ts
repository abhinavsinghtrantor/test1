import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";
import { TabsPage } from "../tabs/tabs";

@IonicPage()
@Component({
  selector: "page-verify-number",
  templateUrl: "verify-number.html"
})
export class VerifyNumberPage {
  otp;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad VerifyNumberPage");
  }
  VerifyNumber() {
    localStorage['user'] = "yes";
    let message = this.toastCtrl.create({
      message: "Verification Success",
      position: "bottom",
      duration: 1000
    });
    message.present();
    this.navCtrl.setRoot(TabsPage);
    console.log("verify number");
    //write code to verify code
  }
  resendCode() {
    this.otp = "";
    let message = this.toastCtrl.create({
      message: "OTP is Sent to your Register Mobile Number",
      position: "bottom",
      duration: 1000
    });
    message.present();
    console.log("resend code");
    //write code to resend OTP
  }
}
