import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AddDocsModelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-docs-model',
  templateUrl: 'add-docs-model.html',
})
export class AddDocsModelPage {

  constructor(public navCtrl: NavController, public viewCtrl : ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDocsModelPage');
  }

  public closeModal(){
    this.viewCtrl.dismiss();
  }

}
