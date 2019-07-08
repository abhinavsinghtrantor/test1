import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserHomePage } from './user-home';
import { StarRatingModule } from 'ionic3-star-rating';

@NgModule({
  declarations: [
    UserHomePage,
  ],
  imports: [
    StarRatingModule,
    IonicPageModule.forChild(UserHomePage),
  ],
})
export class UserHomePageModule {}
