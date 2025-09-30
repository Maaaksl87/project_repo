import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import { connectToDatabase } from './config/db.js'
import productsRouter from './routes/products.js'
import { notFoundHandler, errorHandler } from './middlewares/errorHandler.js'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

await connectToDatabase(process.env.MONGODB_URI)

app.use('/api/products', productsRouter)

app.use(notFoundHandler)
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
