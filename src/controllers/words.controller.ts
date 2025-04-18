import { Response, Request } from 'express'
import * as entityService from '../services/entity.service'
import { Word } from '../models/words.mode'
import logger from '../utils/logger'

export const words = async (req: Request, res: Response) => {
  try {
    const words = await entityService.findEntity(Word)
    res.status(200).json({ data: words })
  } catch (error) {
    logger.error('Error fetching words:', error)
    res.status(500).json({ message: 'Internal server error' }) 
  }
}

export const addWord = async (req: Request, res: Response) => {
  const { word } = req.body
  try {
     const entity = await entityService.createEntity(Word, { word })
    res.status(201).json({ data: entity })
  } catch (error) {
    logger.error('Error creating word:', error)
  }
}