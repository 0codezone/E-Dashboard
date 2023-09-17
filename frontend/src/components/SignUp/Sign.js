import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Sign.css";

function Sign() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const getFormData = async (e) => {
    e.preventDefault();
    console.log(name, email, password);
    let result = await fetch(`${process.env.REACT_APP_API}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ name, email, password }),
    });

    let response = await result.json();
    console.log(response);
    // -----------------------------------
    localStorage.setItem("user", JSON.stringify(response));
    navigate("/");
  };

  return (
    <div className="centerForm">
      <form>
        <div className="inputWrapper">
          <h2>SignUp Page</h2>
        </div>
        <div className="inputWrapper">
          <input
            type="text"
            placeholder="NAME"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="inputWrapper">
          <input
            type="email"
            placeholder="EMAIL"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="inputWrapper">
          <input
            type="password"
            placeholder="PASSWORD"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="inputWrapper-btn">
          <button type="button" onClick={getFormData}>
            Sign Up
          </button>
          <span>
            Already have an account? <Link to={"/login"}>Login</Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Sign;
