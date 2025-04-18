import { Router } from 'express'
import { words, addWord } from '../controllers/words.controller'

const wordsRouter = Router()

wordsRouter.get('/', words);
wordsRouter.post('/', addWord)

export default wordsRouter
