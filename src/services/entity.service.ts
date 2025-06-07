
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

export const findEntityByField = async (model: { findOne: (arg0: any) => Promise<any> }, field: string, value: any) => {
  try {
    const query: Record<string, any> = {};
    query[field] = value;
    return await model.findOne(query);
  } catch (error) {
    throw new Error(`Error finding entity by field ${field}`);
  }
} 