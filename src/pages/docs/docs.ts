import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ModalController } from 'ionic-angular';
import { AddDocsModelPage } from '../add-docs-model/add-docs-model';

import { DocTabsPage } from '../doc-tabs/doc-tabs';

/**
 * Generated class for the DocsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-docs',
  templateUrl: 'docs.html',
})
export class DocsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocsPage');
  }
  
    addDocModal() {
      let contactModal = this.modalCtrl.create('AddDocsModelPage');
      contactModal.present();
    }

    

}
