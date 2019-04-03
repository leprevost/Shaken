import { Component } from '@angular/core';
import { SearchPage } from '../search/search';
import { FavPage } from '../fav/fav';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  HomePage = HomePage;
  SearchPage = SearchPage;
  FavPage = FavPage;
}
