import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('detail load');
  }

  ionViewWillEnter() {
    console.log('detail will enter');
  }

  ionViewWillLeave() {
    console.log('detail will leave');
  }

  goToHome() {
    this.navCtrl.pop();
  }

}
