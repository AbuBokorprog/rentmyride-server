import { model, Schema } from 'mongoose';
import { TBike } from './bike.interface';

const BikeSchema = new Schema<TBike>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    maxlength: 300,
  },
  pricePerHour: {
    type: Number,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  cc: {
    type: Number,
    required: true,
  },
  year: {
    type: Date,
  },
  model: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
});

export const Bike = model('Bike', BikeSchema);
