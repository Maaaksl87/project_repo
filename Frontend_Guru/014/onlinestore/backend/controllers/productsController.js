import { Product } from '../models/Product.js'

export async function listProducts(req, res, next) {
  try {
    const items = await Product.find({}).lean()
    res.json(items)
  } catch (error) {
    next(error)
  }
}

export async function getProduct(req, res, next) {
  try {
    const item = await Product.findById(req.params.id).lean()
    if (!item) return res.status(404).json({ message: 'Not found' })
    res.json(item)
  } catch (error) {
    next(error)
  }
}

export async function createProduct(req, res, next) {
  try {
    const { name, header, image, price } = req.body
    const created = await Product.create({ name, header, image, price })
    res.status(201).json(created)
  } catch (error) {
    next(error)
  }
}

export async function updateProduct(req, res, next) {
  try {
    const { name, header, image, price } = req.body
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      { name, header, image, price },
      { new: true, runValidators: true }
    ).lean()
    if (!updated) return res.status(404).json({ message: 'Not found' })
    res.json(updated)
  } catch (error) {
    next(error)
  }
}

export async function deleteProduct(req, res, next) {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id).lean()
    if (!deleted) return res.status(404).json({ message: 'Not found' })
    res.status(204).end()
  } catch (error) {
    next(error)
  }
}


