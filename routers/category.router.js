import express from "express";
import {
  getCategories,
  insertCategory,
} from "../models/category/category.model.js";

const router = express.Router();

router.all("*", (req, res, next) => {
  next();
});

router.get("/", async (req, res) => {
  try {
    const result = await getCategories();
    res.json({
      status: "success",
      message: "Fetching success",
      result,
    });
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
});
router.post("/", async (req, res) => {
  try {
    const result = await insertCategory(req.body);
    res.json({
      status: "success",
      message: "new category saved",
      result,
    });
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
});

export default router;
