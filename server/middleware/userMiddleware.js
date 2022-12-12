import { validationResult, check } from "express-validator";
import { pool } from "../db.js";

export const createUser = [
  check("email")
    .trim()
    .notEmpty()
    .withMessage("Email must not be empty")
    .isEmail()
    .withMessage("Invalid email")
    .custom(async (value) => {
      const email = await pool.query("SELECT * FROM users WHERE email=$1", [
        value,
      ]);
      if (email.rows.length) return Promise.reject("E-mail already in use");
    }),
  check("name")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("name must not be empty")
    .isLength({ max: 25 })
    .withMessage("name must be less than 25 character"),
  check("password")
    .trim()
    .notEmpty()
    .withMessage("Password must not be empty")
    .escape()
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 character")
    .isLength({ max: 30 })
    .withMessage("Password must be less than 30 character")
    .matches(/\d/)
    .withMessage("password must contain a number"),
  check("confirmPassword")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Password confirmation must not be empty")
    .custom((value, { req }) => {
      if (value !== req.body.password)
        return Promise.reject("Password confirmation does not match password");
      else return true;
    }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(200).json({
        success: false,
        type: "validation-error",
        message: "Validation Failure",
        errors: errors.array({ onlyFirstError: true }),
      });
    next();
  },
];

export const login = [
  check("email")
    .trim()
    .notEmpty()
    .withMessage("Email must not be empty")
    .isEmail()
    .withMessage("Invalid Email"),
  check("password").trim().notEmpty().withMessage("Password must not be empty"),
  async (req, res, next) => {
    const { email, password } = req.body;
    const errors = validationResult(req);
    // check if there's error in validator
    if (!errors.isEmpty())
      return res.status(200).json({
        success: false,
        type: "validation-error",
        message: "Validation Failure",
        errors: errors.array({ onlyFirstError: true }),
      });

    // check if there is existing user
    const user = await pool.query("SELECT * FROM users WHERE email=$1", [
      email,
    ]);
    if (!user.rows.length)
      return res.status(200).json({
        success: false,
        type: "credential-error",
        message: "Invalid Credential",
      });

    // check password
    console.log(user.rows[0].password);
    console.log(password);
    console.log(!user.rows[0].password === password);

    if (user.rows[0].password !== password) {
      return res.status(200).json({
        success: false,
        type: "credential-error",
        message: "Invalid Credential",
      });
    }
    //   if (!(await bcrypt.compare(password, user.password)))
    //     return res.status(200).json({
    //       success: false,
    //       type: "credential-error",
    //       message: "Invalid Credential",
    //     });
    res.locals.user = user.rows[0];
    next();
  },
];
