import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the TrailerTabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trailer-tab',
  templateUrl: 'trailer-tab.html',
})
export class TrailerTabPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrailerTabPage');
  }

  addDocModal() {
    let contactModal = this.modalCtrl.create('AddDocsModelPage');
    contactModal.present();
  }

}
