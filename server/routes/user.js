import express from "express";

import {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} from "../controller/user.js";

const router = express.Router();

router.get("/all", getAllUsers);
router.get("/:id", getUser);

router.post("/create", createUser);

router.put("/update/:id", updateUser);

router.delete("/delete/:id", deleteUser);

export default router;
