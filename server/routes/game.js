import express from "express";

import { getGame } from "../controller/game.js";
import { updateScore } from "../controller/game.js";

const router = express.Router();

router.get("/", getGame);
router.put("/score/:name", updateScore);

export default router;
