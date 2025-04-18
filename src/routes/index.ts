import express, { Router } from 'express'
import fs from 'fs'
import path from 'path'
import logger from '../utils/logger'

const router = express.Router()

const routesPath = __dirname
fs.readdirSync(routesPath).forEach(async (file) => {
  if (file === 'index.ts' || !file.endsWith('.ts') && !file.endsWith('.js')) return

 try {
  const route = await import(path.join(routesPath, file)).then(module => module.default)

  if (route && route instanceof Router) {
    const routeName = `/${file.split('.')[0]}`
    router.use(routeName, route as Router)
  }
 } catch (error) {
  logger.error(`Error loading route ${file}:`, error)
  throw error
 }
})

export default router
