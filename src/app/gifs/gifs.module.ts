import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD

import { SharedModule } from '../shared/shared.module';

import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

=======
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SearchBoxComponent } from './components/search-box/search-box/search-box.component';
import { CardlistComponent } from './components/card-list/cardlist/cardlist.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';
import { SharedModule } from '../shared/shared.module';

>>>>>>> 989274f911980244eeab7cc4397029a677ded315


@NgModule({
  declarations: [
<<<<<<< HEAD
    CardComponent,
    CardListComponent,
    HomePageComponent,
    SearchBoxComponent,
=======
    HomepageComponent,
    SearchBoxComponent,
    CardlistComponent,
    GifsCardComponent
>>>>>>> 989274f911980244eeab7cc4397029a677ded315
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
<<<<<<< HEAD
    HomePageComponent,
=======
    HomepageComponent,
>>>>>>> 989274f911980244eeab7cc4397029a677ded315
  ]
})
export class GifsModule { }
