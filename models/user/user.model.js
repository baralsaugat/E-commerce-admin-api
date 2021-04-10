import mongoose from "mongoose";
import adminUsersSchema from "./user.schema.js";

export const createUser = (userObj) => {
  return new Promise((resolve, reject) => {
    try {
      adminUsersSchema(userObj)
        .save()
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};
export const getUserByEmailPassword = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    try {
      adminUsersSchema
        .findOne({ email, password })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};
