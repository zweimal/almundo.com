import { Document, Model, Schema } from 'mongoose';

import { mongoose } from '../../db/mongoose';
import { amenities } from './amenities';

export interface HotelModel extends Document {
  name: string;
  stars: number;
  price: number;
  image: string;
  amenities: typeof amenities;
}

export type HotelModelProvider = Model<HotelModel>;

const hotelSchema = new Schema({
  name: { type: String, required: true },
  stars: { type: Number, min: 1, max: 5, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  amenities: {
    type: [{
      type: String,
      enum: amenities
    }],
    default: []
  }
});

export const Hotel = mongoose.model<HotelModel>('Hotel', hotelSchema) as HotelModelProvider;
