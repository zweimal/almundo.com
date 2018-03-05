import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HotelFilterComponent } from './components/hotel-filter/hotel-filter.component';
import { HotelListComponent } from './pages/hotels/list/hotel-list.component';
import { HotelService } from './services/hotel.service';
import { StarsComponent } from './components/stars/stars.component';
import { HotelListItemComponent } from './components/hotel-list-item/hotel-list-item.component';
import { AmenitiesComponent } from './components/amenities/amenities.component';
import { HotelPriceComponent } from './components/hotel-price/hotel-price.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelFilterComponent,
    HotelListComponent,
    StarsComponent,
    HotelListItemComponent,
    AmenitiesComponent,
    HotelPriceComponent
  ],
  imports: [
    AppRoutingModule,
    AngularSvgIconModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    HotelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
