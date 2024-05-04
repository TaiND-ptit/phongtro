import db from "../models";

export const getPosts = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.findAll({
        raw: true,
        nest: true,
        include: [
          { model: db.Image, as: "images", attributes: ["image"] },
          {
            model: db.Attribute,
            as: "attributes",
            attributes: ["price", "acreage", "published", "hashtag"],
          },
          { model: db.User, as: "user", attributes: ["name", "zalo", "phone"] },
        ],
      });

      resolve({
        postData: response,
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get post",
      });
    } catch (error) {
      reject(error);
    }
  });

export const getPostsLimit = (offset) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.findAndCountAll({
        raw: true,
        nest: true,
        offset: offset * process.env.LIMIT || 0,
        limit: +process.env.LIMIT,
        include: [
          { model: db.Image, as: "images", attributes: ["image"] },
          {
            model: db.Attribute,
            as: "attributes",
            attributes: ["price", "acreage", "published", "hashtag"],
          },
          { model: db.User, as: "user", attributes: ["name", "zalo", "phone"] },
        ],
      });

      resolve({
        postData: response,
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get post",
      });
    } catch (error) {
      reject(error);
    }
  });
