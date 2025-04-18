import logger from "../utils/logger"
export const createEntity = async (model: { new (data: any): any }, data: any) => {
  try {
    const entity = new model(data);
    await entity.save()
    return entity
  } catch (error) {
    logger.error('Error creating entity:', error)
    throw new Error('Error creating entity')
  }
}