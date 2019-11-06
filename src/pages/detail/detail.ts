import { Step_1Page } from './../step-1/step-1';
import { DetailProvider } from './../../providers/detail/detail';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  constructor(public navCtrl: NavController, private detailProvider: DetailProvider) {
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

  goStep1() {
    this.navCtrl.push(Step_1Page);
  }

}
