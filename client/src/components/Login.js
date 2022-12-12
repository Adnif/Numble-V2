import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slice/userSlice";
import email from "../image/email.png";
import password from "../image/password.png";
import { Link, useNavigate } from "react-router-dom";
import "../css/loginRegister.css";

export default function Register() {
  const data = useSelector((state) => state.user.login);
  const errors = data.errors;

  const initialState = {
    email: "",
    password: "",
  };
  const [inputData, setInputData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data.success) {
      navigate("/");
    }
  }, [data]);

  function registerButtonHandler() {
    dispatch(login(inputData));
  }

  return (
    <div className="w-full">
      <div className="max-w-sm mx-auto mt-20">
        <h1 className="text-center text-4xl font-medium text-white mt-4">
          Login
        </h1>

        <div className="px-4">
          {data.errorsType === "credential-error" && (
            <div className="w-full py-1 text-center bg-red-700 border-2 text-sm border-red-900 rounded-lg font-light text-white mt-3">
              Invalid Credential
            </div>
          )}
          <form action="" method="post" className="py-2">
            {/* email */}
            <div
              className={`flex flex-row w-full rounded border  h-10 ${
                errors.email ? "border-red-500" : "border-gray-600"
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
                errors.password ? "border-red-500" : "border-gray-600"
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
          </form>

          <button
            onClick={registerButtonHandler}
            className="bg-indigo-700 w-full text-center py-2 mt-2 rounded text-sm font-medium text-white"
          >
            Login
          </button>

          <p className="text-center text-xs font-light text-white mt-4">
            <Link to={"/register"} href="" className="text-white font-medium">
              Register
            </Link>
            &nbsp;if you not have an account !
          </p>
        </div>
      </div>
    </div>
  );
}
