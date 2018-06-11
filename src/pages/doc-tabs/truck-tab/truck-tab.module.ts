import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TruckTabPage } from './truck-tab';

@NgModule({
  declarations: [
    TruckTabPage,
  ],
  imports: [
    IonicPageModule.forChild(TruckTabPage),
  ],
})
export class TruckTabPageModule {}
