import mongoose, { Schema } from 'mongoose';

let ValidState = {
  values: ['STOCK', 'ACTIVE', 'FINISHED'],
  message: '{VALUE} no es un ESTADO válido'
};


const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'El NOMBRE del producto es requerido.']
    },
    category: [{
      ref: 'Category',
      type: Schema.Types.ObjectId
    }],
    price: {
      type: Number,
      required: [true, 'El PRECIO del producto es requerido.'],
    },
    imgURL: {
      type: String,
      default: null
    },
    state: {
      type: String,
      default: 'STOCK',
      enum: ValidState
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default mongoose.model('Product', ProductSchema);
