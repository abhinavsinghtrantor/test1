import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FiltersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filters',
  templateUrl: 'filters.html',
})
export class FiltersPage {
  structure: any = { lower: 5, upper: 20 };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FiltersPage');
  }
  filter(){
    /// Code for filter
    console.log('filter');
    this.navCtrl.pop();
  }
  clear(){
    // code for clear filter
    console.log('clear');
  }
}