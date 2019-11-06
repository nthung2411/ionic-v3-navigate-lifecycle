import { DetailPage } from './../detail/detail';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ionViewWillEnter() {
    console.log('home will enter');
  }

  ionViewWillLeave() {
    console.log('home will leave');
  }

  goToDetail() {
    this.navCtrl.push(DetailPage);
  }

}
