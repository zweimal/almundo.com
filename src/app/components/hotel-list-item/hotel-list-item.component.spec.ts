import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSvgIconModule } from 'angular-svg-icon';

import { AmenitiesComponent } from '../amenities/amenities.component';
import { HotelListItemComponent } from './hotel-list-item.component';
import { HotelPriceComponent } from '../hotel-price/hotel-price.component';
import { StarsComponent } from '../stars/stars.component';

describe('HotelListItemComponent', () => {
  let component: HotelListItemComponent;
  let fixture: ComponentFixture<HotelListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AmenitiesComponent,
        HotelListItemComponent,
        HotelPriceComponent,
        StarsComponent
      ],
      imports: [
        AngularSvgIconModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
