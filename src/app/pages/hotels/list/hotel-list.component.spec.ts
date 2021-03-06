import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularSvgIconModule } from 'angular-svg-icon';

import { AmenitiesComponent } from '../../../components/amenities/amenities.component';
import { HotelFilterComponent } from '../../../components/hotel-filter/hotel-filter.component';
import { HotelListComponent } from './hotel-list.component';
import { HotelListItemComponent } from '../../../components/hotel-list-item/hotel-list-item.component';
import { HotelPriceComponent } from '../../../components/hotel-price/hotel-price.component';
import { HotelService } from '../../../services/hotel.service';
import { StarsComponent } from '../../../components/stars/stars.component';

describe('HotelListComponent', () => {
  let component: HotelListComponent;
  let fixture: ComponentFixture<HotelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AmenitiesComponent,
        HotelFilterComponent,
        HotelListComponent,
        HotelListItemComponent,
        HotelPriceComponent,
        StarsComponent
      ],
      imports: [
        AngularSvgIconModule,
        HttpClientTestingModule,
        ReactiveFormsModule
      ],
      providers: [ HotelService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
