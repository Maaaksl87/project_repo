import mongoose, { Schema } from "mongoose";

interface IProduct {
  name: string;
  category: string;
  image: string;
  price: number;
  description?: string;
}

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
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
