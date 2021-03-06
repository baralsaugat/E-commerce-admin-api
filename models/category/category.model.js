import CategorySchema from "./category.schema.js";

export const getCategories = (catObj) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await CategorySchema.find();
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
export const insertCategory = (catObj) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await CategorySchema(catObj).save();
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
