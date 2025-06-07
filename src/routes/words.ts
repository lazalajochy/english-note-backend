import { Router } from 'express'
import { words, addWord } from '../controllers/words.controller'
import { upload } from '../utils/util';

const wordsRouter = Router()

wordsRouter.get('/', words);
wordsRouter.post('/', upload.single("image"), addWord)

export default wordsRouter
