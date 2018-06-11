import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { AddDocsModelPage } from '../add-docs-model/add-docs-model';
/**
 * Generated class for the DriverTabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driver-tab',
  templateUrl: 'driver-tab.html',
})
export class DriverTabPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverTabPage');
  }

  addDocModal() {
    let contactModal = this.modalCtrl.create('AddDocsModelPage');
    contactModal.present();
  }

}
