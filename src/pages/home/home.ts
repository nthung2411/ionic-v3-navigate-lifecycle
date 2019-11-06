import { DetailPage } from './../detail/detail';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeProvider } from '../../providers/home/home';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private homeProvider: HomeProvider) {

  }

  ionViewDidLoad() {
    console.log('home load');
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
