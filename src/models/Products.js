import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema(
  {
    name: String,
    category: String,
    price: Number,
    imgURL: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default mongoose.model('Product', ProductSchema);
