import { NextFunction, Request, Response } from 'express';

import { Hotel } from '../models/hotel.model';

export class HotelController {

  constructor() {
    this.list = this.list.bind(this);
  }

  public list(request: Request, response: Response, next: NextFunction) {
    const filters = this.getFilters(request.query);
    Hotel.find(filters, (error, hotels) => {
      if (error) {
        return next(error);
      }
      response.json(hotels);
    });
  }

  public create(request: Request, response: Response, next: NextFunction) {
    const new_hotel = new Hotel(request.body);
    new_hotel.save((error, hotel) => {
      if (error) {
        return next(error);
      }
      response.json(hotel);
    });
  }

  public retrieve(request: Request, response: Response, next: NextFunction) {
    Hotel.findById(request.params.id, (err, hotel) => {
      if (err) {
        return next(err);
      }
      response.json(hotel);
    });
  }

  public update(request: Request, response: Response, next: NextFunction) {
    Hotel.findByIdAndUpdate(request.params.id, request.body, {new: true}, (err, hotel) => {
      if (err) {
        return next(err);
      }
      response.json(hotel);
    });
  }

  public delete(request: Request, response: Response, next: NextFunction) {
    Hotel.findByIdAndRemove(request.params.id, function(err, hotel) {
      if (err) {
        return next(err);
      }
      response.json({ message: 'Hotel successfully deleted' });
    });
  }

  private getFilters({name, price, stars}: {[key: string]: string}) {
    const filters: any = {};
    if (name) {
      filters.name = { $regex: name, $options: 'i' };
    }
    const starsFilter = this.getStarFilter(stars);
    if (starsFilter) {
      filters.stars = starsFilter;
    }

    const priceFilter = this.getRangeFilter(price, 0, Number.MAX_SAFE_INTEGER);
    if (priceFilter) {
      filters.price = priceFilter;
    }

    return filters;
  }

  private getStarFilter(query: string) {
    if (!query) {
      return undefined;
    }

    if (query.length > 5) {
      throw new Error('wrong stars query length');
    }
    const stars = query.split('')
      .map(s => +s)
      .filter(n => n > 0 && n <= 5)
      .sort((a, b) => a - b);

    return { $in: stars };
  }

  private getRangeFilter(query: string | undefined, minValue: number, maxValue: number) {
    if (!query || !query.length) {
      return undefined;
    }

    const [min, sep, max] = query.split(/(:)/);

    // case ':'
    if (min === '' && max === '') {
      return undefined;
    }

    // case /^\d+$/ or case 'n:n'
    if (!sep || min === max) {
      const value = Math.min(Math.max(minValue, +min), maxValue);
      return { $eq: value };
    }

    minValue = Math.max(+min, minValue);
    maxValue = max ? Math.min(+max, maxValue) : maxValue;
    if (minValue > maxValue) {
      return undefined;
    }

    // cases ':n', 'n:' or 'm:n'
    return{ $gt: minValue - 1, $lt: maxValue + 1 };
  }
}




