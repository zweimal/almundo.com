import { Component, Input } from '@angular/core';

import { HotelModel } from '../../models/hotel.model';

@Component({
  selector: 'am-hotel-list-item',
  templateUrl: './hotel-list-item.component.html',
  styleUrls: ['./hotel-list-item.component.scss']
})
export class HotelListItemComponent {

  @Input() hotel: HotelModel;

}
