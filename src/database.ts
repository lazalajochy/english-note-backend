import { db } from './config/conn'
import logger from './utils/logger'

export const connectDB = async () => {
  try {
    await db.authenticate()
    await db.sync({ alter: true })
    logger.info('Database connected successfully!')
  } catch (error) {
    logger.error('Unable to connect to the database:', error)
  }
}
