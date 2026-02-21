import mongoose, { Schema } from "mongoose";

interface IProduct {
  category: string;
  image: {
    desktop: string;
    tablet: string;
    mobile: string;
  }
  price: number;
  description?: string;
  
}

const productSchema = new Schema<IProduct>(
  {
    category: { type: String, required: true },
    image: {
      desktop: { type: String, required: true },
      tablet: { type: String, required: true },
      mobile: { type: String, required: true },
    },
    price: { type: Number, required: true },
    description: { type: String },
  },
  { timestamps: true },
);

productSchema.set("toJSON", {
  transform: ({ _id, __v, ...rest }) => ({
    id: _id.toString(),
    ...rest,
  }),
});

export const Product = mongoose.model<IProduct>("Product", productSchema);
