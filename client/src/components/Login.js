import React from "react";
import "../css/Popup.css";

function Login(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          className="btn btn-danger btn-sm close-btn"
          onClick={() => props.setTrigger(false)}
        >
          x
        </button>

        <h3 className="text-dark">Login</h3>

        <form className="text-dark text-start mt-3">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Your email here..."
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Your password here..."
            />
          </div>
          <button type="submit" class="btn btn-primary w-100 mt-3">
            Login
          </button>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Login;
