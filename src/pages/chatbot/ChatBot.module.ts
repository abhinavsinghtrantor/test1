import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatBot } from './ChatBot';
import { StarRatingModule } from 'ionic3-star-rating';
@NgModule({
  declarations: [
    ChatBot,
  ],
  imports: [
    StarRatingModule,
    IonicPageModule.forChild(ChatBot),
  ],
})
export class FiltersPageModule {}
