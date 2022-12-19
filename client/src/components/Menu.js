import React, { useState } from "react";

// import Login from "./Login";
// import Register from "./Register";
import Instruction from "./Instruction";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  login,
  logout,
  resetLogin,
  resetRegister,
} from "../redux/slice/userSlice";

export default function Menu() {
  // const [loginButton, setLoginButton] = useState(false);
  // const [registerButton, setRegisterButton] = useState(false);
  const [instructionButton, setInstructionButton] = useState(false);
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.user.isLogin);
  const dispatch = useDispatch();

  console.log(isLogin);

  useEffect(() => {
    dispatch(resetLogin());
    dispatch(resetRegister());
    if (!isLogin) {
      navigate("/login");
    }
  });

  function buttonController() {
    // logout
    if (isLogin) {
      dispatch(logout());
    } else {
      navigate("/login");
    }
  }

  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="container">
          <button
            className="btn btn-secondary btn-sm me-3"
            onClick={() => buttonController()}
            style={{ width: "100px" }}
          >
            {isLogin ? "Logout" : "Login"}
          </button>
          {/* <button
            className="btn btn-light btn-sm"
            onClick={() => navigate("/register")}
            style={{ width: "100px" }}
          >
            Register
          </button> */}

          <h1 className="text-light fw-bold" style={{ "font-size": "120px" }}>
            NUMBLE
          </h1>
          <h5>Improve your math skills while having fun!</h5>
          <div className="mt-5">
            <button
              onClick={() => navigate("/game")}
              className="btn btn-primary btn-lg me-4"
              style={{ "font-size": "28px" }}
            >
              Start Game
            </button>
            <button
              href="#"
              className="btn btn-warning btn-lg ms-4"
              style={{ "font-size": "28px" }}
              onClick={() => setInstructionButton(true)}
            >
              Instruction
            </button>
          </div>
        </div>
      </div>

      <Instruction
        trigger={instructionButton}
        setTrigger={setInstructionButton}
      />
      {/* <Login trigger={loginButton} setTrigger={setLoginButton} />
      <Register trigger={registerButton} setTrigger={setRegisterButton} /> */}
    </>
  );
}
