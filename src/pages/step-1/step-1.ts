import { Step_2Page } from './../step-2/step-2';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-step-1',
  templateUrl: 'step-1.html',
})
export class Step_1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('step 1 load');
  }

  ionViewWillEnter() {
    console.log('step 1 will enter');
  }

  ionViewWillLeave() {
    console.log('step 1 will leave');
  }

  goStep2() {
    this.navCtrl.push(Step_2Page);
  }

}
