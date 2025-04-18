
export const createEntity = async (model: { new (data: any): any }, data: any) => {
  try {
    return new model(data).save();
  } catch (error) {
    throw new Error('Error creating entity')
  }
}
