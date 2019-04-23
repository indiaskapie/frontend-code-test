import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NasaImgsModule } from './nasa-imgs/nasa-imgs.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NasaImgsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
