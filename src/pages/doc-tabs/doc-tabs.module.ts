import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocTabsPage } from './doc-tabs';

@NgModule({
  declarations: [
    DocTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(DocTabsPage),
  ]
})
export class DocTabsPageModule {}
