import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserCartPage } from './user-cart';

@NgModule({
  declarations: [
    UserCartPage,
  ],
  imports: [
    IonicPageModule.forChild(UserCartPage),
  ],
})
export class UserCartPageModule {}
