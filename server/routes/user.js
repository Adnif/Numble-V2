import express from "express";
import * as userMiddleware from "../middleware/userMiddleware.js";

import {
  getAllUsers,
  createUser,
  login,
  getUser,
  updateUser,
  deleteUser,
} from "../controller/user.js";

const router = express.Router();

router.get("/all", getAllUsers);
router.get("/:id", getUser);

router.post("/create", userMiddleware.createUser, createUser);
router.post("/login", userMiddleware.login, login);

router.put("/update/:id", updateUser);

router.delete("/delete/:id", deleteUser);

export default router;
