import { Component, Input } from '@angular/core';

@Component({
  selector: 'am-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.scss']
})
export class AmenitiesComponent {

  @Input() values: string[];

}
