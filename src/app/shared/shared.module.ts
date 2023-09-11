import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
<<<<<<< HEAD
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';
=======
import { LazyImageComponent } from './lazy-image/lazy-image.component';
>>>>>>> 989274f911980244eeab7cc4397029a677ded315



@NgModule({
  declarations: [
    SidebarComponent,
    LazyImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
<<<<<<< HEAD
    LazyImageComponent,
=======
    LazyImageComponent
>>>>>>> 989274f911980244eeab7cc4397029a677ded315
  ]
})
export class SharedModule { }
