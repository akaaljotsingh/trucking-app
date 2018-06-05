import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TruckPage } from './truck';

@NgModule({
  declarations: [
    TruckPage,
  ],
  imports: [
    IonicPageModule.forChild(TruckPage),
  ],
})
export class TruckPageModule {}
