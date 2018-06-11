import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverTabPage } from './driver-tab';

@NgModule({
  declarations: [
    DriverTabPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverTabPage),
  ],
})
export class DriverTabPageModule {}
