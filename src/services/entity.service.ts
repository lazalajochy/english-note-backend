
export const createEntity = async (model: { new (data: any): any }, data: any) => {
  try {
    return new model(data).save();
  } catch (error) {
    throw new Error('Error creating entity')
  }
}


export const findEntity = async (model: { findAll: () => Promise<any> }) => {
  try {
    return await model.findAll();
  } catch (error) {
    throw new Error('Error finding entity');
  }
}