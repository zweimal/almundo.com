import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

import { FilterOptions } from '../../services/hotel.service';

const ANY_STARS = {
  any: true,
  1: false,
  2: false,
  3: false,
  4: false,
  5: false
};

const STARS_OPTIONS = Array(5).fill(1).map((_, i) => 5 - i);

@Component({
  selector: 'am-hotel-filter',
  templateUrl: './hotel-filter.component.html',
  styleUrls: ['./hotel-filter.component.scss']
})
export class HotelFilterComponent implements OnDestroy {

  @Output() public filtersChange = new EventEmitter<FilterOptions>();

  public hotelForm: FormGroup;
  public isCollapsed = true;
  public starsOptions = STARS_OPTIONS;

  private anyStarsSubscription: Subscription;
  private starsSubscription: Subscription;

  constructor(formBuilder: FormBuilder) {
    this.hotelForm = formBuilder.group({
      name: '',
      stars: formBuilder.group({ ...ANY_STARS }),
    });

    this.anyStarsSubscription = this.stars.get('any').valueChanges.subscribe(anyStars => {
      if (anyStars) {
        this.stars.setValue({ ...ANY_STARS }, { emitEvent: false });
      }
    });

    this.starsSubscription = this.stars.valueChanges.subscribe(stars => {
      if (stars[1] || stars[2] || stars[3] || stars[4] || stars[5]) {
        this.stars.get('any').setValue(false, { emitEvent: false });
      } else if (!stars.any) {
        this.stars.get('any').setValue(true, { emitEvent: false });
      }

      this.filtersChange.emit(this.hotelForm.value);
    });
  }

  public ngOnDestroy() {
    this.anyStarsSubscription.unsubscribe();
    this.starsSubscription.unsubscribe();
  }

  public onClickAcceptButton() {
    this.filtersChange.emit(this.hotelForm.value);
  }

  private get stars() {
    return this.hotelForm.get('stars');
  }
}
