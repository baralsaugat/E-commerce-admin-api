import express from "express";

const router = express.Router();

import { loginValidation } from "../middlewares/formValidation.middleware.js";

import {
  createUser,
  getUserByEmailPassword,
} from "../models/user/user.model.js";
router.all("*", (req, res, next) => {
  next();
});

router.post("/", loginValidation, async (req, res) => {
  try {
    const result = await getUserByEmailPassword(req.body);
    console.log(result);
    if (result?._id) {
      return res.json({ status: "success", message: "login success", result });
    }
    res.json({ status: "error", message: "invalid  login details" });
  } catch (error) {
    throw new Error(error.message);
  }
});

export default router;
