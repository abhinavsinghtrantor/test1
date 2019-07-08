import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'UserHomePage';
  tab2Root = 'OrderHistoryPage';
  tab3Root = 'UserCartPage';
  tab4Root = 'UserProfilePage';
  constructor() {

  }
}
