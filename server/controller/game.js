import { pool } from "../db.js";

export const getGame = async (req, res) => {
  try {
    res.status(200).json({ message: "Successfull!" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateScore = async (req, res) => {
  try {
    const { name } = req.params;
    const {score} = req.body;

    const newScore = await pool.query("UPDATE users SET score = score + $1 WHERE name=$2", [score, name])

    res.json("Score Updated");
  } catch (error) {
    console.error(error.message);
  }
};
