import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FiltersPage } from './filters';
import { StarRatingModule } from 'ionic3-star-rating';
@NgModule({
  declarations: [
    FiltersPage,
  ],
  imports: [
    StarRatingModule,
    IonicPageModule.forChild(FiltersPage),
  ],
})
export class FiltersPageModule {}
