import { Component, Input, OnChanges } from '@angular/core';
import { HotelModel } from '../../models/hotel.model';

@Component({
  selector: 'am-hotel-price',
  templateUrl: './hotel-price.component.html',
  styleUrls: ['./hotel-price.component.scss']
})
export class HotelPriceComponent implements OnChanges {

  @Input() public hotel: HotelModel;

  public price: number;

  public ngOnChanges() {
    this.price = Math.round(this.hotel.price);
  }
}
