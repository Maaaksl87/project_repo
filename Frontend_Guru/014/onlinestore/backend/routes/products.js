import { Router } from 'express'
import * as productsController from '../controllers/productsController.js'

const router = Router()

router.get('/', productsController.listProducts)
router.get('/:id', productsController.getProduct)
router.post('/', productsController.createProduct)
router.put('/:id', productsController.updateProduct)
router.delete('/:id', productsController.deleteProduct)

export default router


