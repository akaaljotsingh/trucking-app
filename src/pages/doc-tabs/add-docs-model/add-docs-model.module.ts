import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDocsModelPage } from './add-docs-model';

@NgModule({
  declarations: [
    AddDocsModelPage,
  ],
  imports: [
    IonicPageModule.forChild(AddDocsModelPage),
  ],
})
export class AddDocsModelPageModule {}
