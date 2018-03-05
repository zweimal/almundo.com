import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { HotelService, FilterOptions } from '../../../services/hotel.service';
import { HotelModel } from '../../../models/hotel.model';

@Component({
  selector: 'am-hotel-list',
  templateUrl: './hotel-list.component.html'
})
export class HotelListComponent implements OnInit {

  public hotels: Observable<HotelModel[]>;

  constructor(private _hotelService: HotelService) { }

  public ngOnInit() {
    this.searchHotels();
  }

  public searchHotels(filters?: FilterOptions): void {
    this.hotels = this._hotelService.getHotels(filters);
  }
}
