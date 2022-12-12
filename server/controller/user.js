import { pool } from "../db.js";

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await pool.query(
      "INSERT INTO users (name, email, password) VALUES($1, $2, $3) RETURNING *",
      [name, email, password]
    );
    res.status(201).json({
      success: true,
      message: "User created succesfully",
      data: newUser.rows[0],
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const login = (req, res) => {
  try {
    res.status(201).json({
      success: true,
      message: "Login sucessful",
      data: res.locals.user,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const allUser = await pool.query("SELECT * FROM users");

    res.json(allUser.rows);
  } catch (error) {
    console.error(error.message);
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await pool.query("SELECT * FROM users WHERE id=$1", [id]);

    res.json(user.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const newUser = await pool.query(
      "UPDATE users SET name=$1, email=$2, password=$3 WHERE id=$4",
      [name, email, password, id]
    );

    res.json("User Updated!");
  } catch (error) {
    console.error(error.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await pool.query("DELETE FROM users WHERE id=$1", [id]);

    res.json("User Deleted!");
  } catch (error) {
    console.error(error.message);
  }
};
