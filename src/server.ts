import  './config/env'
import express from 'express'
import "./database"
import { middlewares } from './middlewares/middlewares'
import logger from './utils/logger'

const app: express.Application = express()

app.disable('x-powered-by');

const PORT: number = Number(process.env.PORT);

middlewares.forEach((middleware) => {
  (middleware instanceof express.Router) ? app.use('/api', middleware) : app.use(middleware)
})


app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`)
})
