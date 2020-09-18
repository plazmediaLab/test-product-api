import mongoose from 'mongoose';

const CategorySchema = mongoose.Schema(
  {
    name: String
  },
  {
    versionKey: false,
  }
);

export default mongoose.model('Category', CategorySchema);
