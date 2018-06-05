import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the DocTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doc-tabs',
  templateUrl: 'doc-tabs.html'
})
export class DocTabsPage {

  driverTabRoot = 'DriverTabPage'
  truckTabRoot = 'TruckTabPage'
  trailerTabRoot = 'TrailerTabPage'


  constructor(public navCtrl: NavController) {}

}
