import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SearchBoxComponent } from './components/search-box/search-box/search-box.component';
import { CardlistComponent } from './components/card-list/cardlist/cardlist.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';



@NgModule({
  declarations: [
    HomepageComponent,
    SearchBoxComponent,
    CardlistComponent,
    GifsCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomepageComponent,
  ]
})
export class GifsModule { }
