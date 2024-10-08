import { model, Schema } from 'mongoose';

const typesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export const Types = model('type', typesSchema);
