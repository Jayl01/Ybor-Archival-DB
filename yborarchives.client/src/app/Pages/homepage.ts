import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Searchbar} from './Components/SearchBar/Searchbar'
import "tailwindcss";

@NgModule({
  declarations: [
    AppComponent,
    Searchbar
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, Searchbar]
})
export class AppModule { }
