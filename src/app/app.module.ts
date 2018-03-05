import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HotelListComponent } from './pages/hotels/list/hotel-list.component';
import { HotelService } from './services/hotel.service';


@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [
    HotelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
