import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';

import { GifsModule } from './gifs/gifs.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    GifsModule,
    SharedModule,
=======

import { GifsModule } from './gifs/gifs.module';
import { SharedModule } from './shared/shared.module';
import {HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    GifsModule,
    SharedModule,
    HttpClientModule,
>>>>>>> 989274f911980244eeab7cc4397029a677ded315
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
