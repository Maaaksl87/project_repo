import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  category: { type: String, required: true },
  header: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
}, { timestamps: true })

productSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

export const Product = mongoose.model('Product', productSchema)


