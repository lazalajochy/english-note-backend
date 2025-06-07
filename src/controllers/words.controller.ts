import { Response, Request } from 'express'
import * as entityService from '../services/entity.service'
import Word from '../models/words.mode'
import { uploadFileToBucket } from '../utils/util'

import logger from '../utils/logger'

export const words = async (req: Request, res: Response) => {
  try {
    const words = await entityService.findEntity({ findAll: () => Word.find() })
    res.status(200).json({ data: words })
  } catch (error) {
    logger.error('Error fetching words:', error)
    res.status(500).json({ message: 'Internal server error' }) 
  }
}

export const addWord = async (req: Request, res: Response) => {
  const { word, definition, example, partOfSpeech, userId } = req.body
  try {
    let image: string | null = null
    if (req.file) {
      image = await uploadFileToBucket(req.file)
    }
    if (!image) {
      res.status(400).json({ message: 'Image is required' })
      return
    }

    const newWord = {
      word,
      definition,
      example,
      partOfSpeech,
      image,
      userId
    }
    
    const entity = await entityService.createEntity(Word, newWord)
    
    res.status(201).json({ data: entity })
  } catch (error) {
    logger.error('Error creating word:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}