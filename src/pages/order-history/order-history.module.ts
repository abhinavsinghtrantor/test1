import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { OrderHistoryPage } from "./order-history";
import { StarRatingModule } from "ionic3-star-rating";

@NgModule({
  declarations: [OrderHistoryPage],
  imports: [StarRatingModule, IonicPageModule.forChild(OrderHistoryPage)]
})
export class OrderHistoryPageModule {}
