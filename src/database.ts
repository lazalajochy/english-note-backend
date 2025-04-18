import { db } from './config/conn'

export const connectDB = async () => {
  try {
    await db.authenticate()
    await db.sync({ alter: true })
    const result = await db.query('select now() as now;')
    console.log('Database connected successfully:', result[0][0])
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
