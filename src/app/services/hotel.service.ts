import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { HotelModel } from '../models/hotel.model';
import { API_PREFIX } from './service-utils';

const HOTELS_ENDPOINT = API_PREFIX + 'hotels';

@Injectable()
export class HotelService {

  constructor(private _http: HttpClient) {
  }

  public getHotels(filters?: FilterOptions): Observable<HotelModel[]> {
    return this._http.get<HotelModel[]>(HOTELS_ENDPOINT, { params: this._serializeFilters(filters) });
  }

  private _serializeFilters(filters?: FilterOptions) {
    const params = {};
    if (filters) {
      const { name, price, stars } = filters;
      if (name) {
        params['name'] = name;
      }
      if (price) {
        params['price'] = (price.min || '') + ':' + (price.max || '');
      }
      if (stars) {
        params['stars'] = this._serializeStarsMap(stars);
      }
    }
    return params;
  }

  private _serializeStarsMap(stars: {[key: number]: boolean}): string {
    let outcome = '';
    for (let i = 1; i <= 5; i++) {
      if (stars[i]) {
        outcome += i;
      }
    }

    return outcome;
  }
}

export interface FilterOptions {
  name?: string;
  price?: {min: number, max: number};
  stars?: {[key: number]: boolean};
}
