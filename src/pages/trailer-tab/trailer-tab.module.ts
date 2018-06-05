import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrailerTabPage } from './trailer-tab';

@NgModule({
  declarations: [
    TrailerTabPage,
  ],
  imports: [
    IonicPageModule.forChild(TrailerTabPage),
  ],
})
export class TrailerTabPageModule {}
