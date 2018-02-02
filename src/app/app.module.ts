import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SliderComponent } from './components/slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
