import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { NewAddressPage } from "./new-address";
import { GooglePlacesAutocompleteComponentModule } from "ionic2-google-places-autocomplete";

@NgModule({
  declarations: [NewAddressPage],
  imports: [
    IonicPageModule.forChild(NewAddressPage),
    GooglePlacesAutocompleteComponentModule
  ]
})
export class NewAddressPageModule {}
