import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-step-2',
  templateUrl: 'step-2.html',
})
export class Step_2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('step 2 load');
  }

  ionViewWillEnter() {
    console.log('step 2 will enter');
  }

  ionViewWillLeave() {
    console.log('step 2 will leave');
  }

  goHome() {
    this.navCtrl.push(HomePage);
  }

}
