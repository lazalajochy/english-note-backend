import { Response, Request } from 'express'
import { createEntity } from '../services/entity.service'
import { Word } from '../models/words.mode'
import logger from '../utils/logger'

export const words = async (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Hello from words controller!'
  })
}

export const addWord = async (req: Request, res: Response) => {
  const { word } = req.body
  try {
     const entity = await createEntity(Word, { word })
    res.status(201).json({ data: entity })
  } catch (error) {
    logger.error('Error creating word:', error)
  }
}