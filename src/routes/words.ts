import { Router } from 'express'
import { words } from '../controllers/words.controller'

const wordsRouter = Router()

wordsRouter.get('/', words)

export default wordsRouter
