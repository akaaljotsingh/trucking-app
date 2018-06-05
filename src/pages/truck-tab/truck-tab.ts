import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the TruckTabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-truck-tab',
  templateUrl: 'truck-tab.html',
})
export class TruckTabPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TruckTabPage');
  }

  addDocModal() {
    let contactModal = this.modalCtrl.create('AddDocsModelPage');
    contactModal.present();
  }

}
