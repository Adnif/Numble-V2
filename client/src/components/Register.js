import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/slice/userSlice";
import user from "../image/user.png";
import email from "../image/email.png";
import password from "../image/password.png";
import { Link } from "react-router-dom";
import "../css/loginRegister.css";

export default function Register() {
  const data = useSelector((state) => state.user.register);
  const errors = data.errors;

  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [inputData, setInputData] = useState(initialState);
  const dispatch = useDispatch();

  function registerButtonHandler() {
    dispatch(register(inputData));
  }

  return (
    <div className="w-full">
      <div className="max-w-sm mx-auto mt-24">
        <h1 className="text-center text-4xl font-medium text-white mt-4">
          Register account
        </h1>

        <p className="text-sm text-center mt-2 text-white">
          Create account and Explore the App
        </p>

        <div className="px-4">
          {data.success && (
            <div className="w-full py-1 text-center bg-indigo-500 rounded-lg text-white font-light mt-3">
              Account successfully created,{" "}
              <Link to={"/login"} href="" className="font-medium">
                login
              </Link>
            </div>
          )}
          <form action="" method="post" className="py-2  mt-2">
            {/* name */}
            <div
              className={`flex flex-row w-full rounded border h-10 ${
                errors.name ? "border-danger" : "border-secondary"
              }  mt-2 focus-within:border-white`}
            >
              <div className="bg-black  py-2 px-3 drop-shadow-lg text-white">
                <img src={user} className="h-full w-full" alt="" />
              </div>
              <input
                onChange={(e) =>
                  setInputData({ ...inputData, name: e.target.value })
                }
                type="text"
                placeholder="name"
                className="w-full  px-1   placeholder-gray-400 focus:placeholder-gray-300  focus:outline-none bg-black text-white text-sm"
              />
            </div>

            {errors.name && (
              <p className="text-xs text-red-400 mt-1">{errors.name}</p>
            )}

            {/* email */}
            <div
              className={`flex flex-row w-full rounded border  h-10 ${
                errors.email ? "border-danger" : "border-secondary"
              }  mt-2 focus-within:border-white`}
            >
              <div className="bg-black  py-2 px-3 drop-shadow-lg text-white">
                <img src={email} className="h-full w-full" alt="" />
              </div>
              <input
                onChange={(e) =>
                  setInputData({ ...inputData, email: e.target.value })
                }
                type="text"
                placeholder="Email"
                className="w-full  px-1   placeholder-gray-400 focus:placeholder-gray-300  focus:outline-none bg-black text-white text-sm"
              />
            </div>

            {errors.email && (
              <p className="text-xs text-red-400 mt-1">{errors.email}</p>
            )}

            {/* password */}

            <div
              className={`flex flex-row w-full rounded border  h-10 ${
                errors.password ? "border-danger" : "border-secondary"
              }  mt-2 focus-within:border-white`}
            >
              <div className="bg-black  py-2 px-3 drop-shadow-lg text-white">
                <img src={password} className="h-full w-full" alt="" />
              </div>
              <input
                onChange={(e) =>
                  setInputData({ ...inputData, password: e.target.value })
                }
                type="password"
                placeholder="Password"
                className="w-full  px-1   placeholder-gray-400 focus:placeholder-gray-300  focus:outline-none bg-black text-white text-sm"
              />
            </div>

            {errors.password && (
              <p className="text-xs text-red-400 mt-1">{errors.password}</p>
            )}

            {/* confirm password */}

            <div
              className={`flex flex-row w-full rounded border h-10 ${
                errors.confirmPassword ? "border-danger" : "border-secondary"
              }  mt-2 focus-within:border-white`}
            >
              <div className="bg-black  py-2 px-3 drop-shadow-lg text-white">
                <img src={password} className="h-full w-full" alt="" />
              </div>
              <input
                onChange={(e) =>
                  setInputData({
                    ...inputData,
                    confirmPassword: e.target.value,
                  })
                }
                type="password"
                placeholder="Confirm Password"
                className="w-full  px-1   placeholder-gray-400 focus:placeholder-gray-300  focus:outline-none bg-black text-white text-sm"
              />
            </div>

            {errors.confirmPassword && (
              <p className="text-xs text-red-400 mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </form>

          <button
            onClick={registerButtonHandler}
            className="bg-indigo-700 w-full text-center py-2 mt-2 rounded text-sm font-medium text-white"
          >
            Register
          </button>

          <p className="text-center text-xs font-light text-white mt-4">
            <Link to={"/login"} href="" className="text-white font-medium">
              Login
            </Link>{" "}
            if you aleady have an account !
          </p>
        </div>
      </div>
    </div>
  );
}
