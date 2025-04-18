import  './config/env'
import express from 'express'
import { connectDB } from './database'
import { middlewares } from './middlewares/middlewares'

const app: express.Application = express()

const PORT: number = Number(process.env.PORT);

middlewares.forEach((middleware) => {
  (middleware instanceof express.Router) ? app.use('/api', middleware) : app.use(middleware)
})

connectDB()
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
