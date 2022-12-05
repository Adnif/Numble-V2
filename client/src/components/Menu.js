import React, { useState } from "react";

import Login from "./Login";
import Register from "./Register";
import Instruction from "./Instruction";

export default function Menu() {
  const [loginButton, setLoginButton] = useState(false);
  const [registerButton, setRegisterButton] = useState(false);
  const [instructionButton, setInstructionButton] = useState(false);

  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="container">
          <button
            className="btn btn-secondary btn-sm me-3"
            onClick={() => setLoginButton(true)}
            style={{ width: "100px" }}
          >
            Login
          </button>
          <button
            className="btn btn-light btn-sm"
            onClick={() => setRegisterButton(true)}
            style={{ width: "100px" }}
          >
            Register
          </button>

          <h1 className="text-light fw-bold" style={{ "font-size": "120px" }}>
            NUMBLE
          </h1>
          <h5>Improve your math skills while having fun!</h5>
          <div className="mt-5">
            <a
              href="/game"
              className="btn btn-primary btn-lg me-4"
              style={{ "font-size": "28px" }}
            >
              Start Game
            </a>
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
      <Login trigger={loginButton} setTrigger={setLoginButton} />
      <Register trigger={registerButton} setTrigger={setRegisterButton} />
    </>
  );
}
