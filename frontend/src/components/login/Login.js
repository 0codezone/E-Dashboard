import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../SignUp/Sign.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // isse agar url me serch krke try kre toh bhi neviate ho jaye agr local storagte me ho tb
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const getFormData = async (e) => {
    e.preventDefault();
    console.log(email, password);

    let result = await fetch(`${process.env.REACT_APP_API}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ email, password }),
    });

    let response = await result.json();
    console.log(response);
    // -----------------------------------
    if (response.name) {
      localStorage.setItem("user", JSON.stringify(response));
      navigate("/");
    } else {
      alert("plaese enter correct detail");
    }
  };

  return (
    <div className="centerForm">
      <form>
        <div className="inputWrapper">
          <h2>Login Page</h2>
        </div>
        <div className="inputWrapper">
          <input
            type="email"
            placeholder="EMAIL"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </div>
        <div className="inputWrapper">
          <input
            type="password"
            placeholder="PASSWORD"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </div>
        <div className="inputWrapper-btn">
          <button type="button" onClick={getFormData}>
            Login
          </button>
          <span>
            Have you register?
            <Link to={"/signup"}> SignUp</Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Login;
