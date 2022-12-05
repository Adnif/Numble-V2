import React, { useState } from "react";
import "../css/Popup.css";

function Register(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = formData;
      const response = await fetch("http://localhost:5000/users/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      console.log(response);

      alert("Account created!");
    } catch (error) {
      console.log(error.message);
    }
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          className="btn btn-danger btn-sm close-btn"
          onClick={() => props.setTrigger(false)}
        >
          x
        </button>

        <h3 className="text-dark">Register</h3>

        <form className="text-dark text-start mt-3" onSubmit={onSubmitForm}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Your name here..."
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Your email here..."
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
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
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <button type="submit" class="btn btn-primary w-100 mt-3">
            Register
          </button>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Register;
