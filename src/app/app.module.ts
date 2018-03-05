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

@NgModule({
  declarations: [
    AppComponent,
    HotelFilterComponent,
    HotelListComponent,
    StarsComponent
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
