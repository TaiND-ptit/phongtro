import db from "../models";


export const getCategories = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Category.findAll({raw: true});
  
      resolve({
        categoryData: response,
        err: response ? 0 : 1,
        msg: response
          ? "OK"
          : "Failed to get category",
      });
    } catch (error) {
      reject(error);
    }
  });