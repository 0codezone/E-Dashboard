import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import "../../App.css";
import "./header.css";

function Header() {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const [menuVisible, setMenuVisible] = useState(false);

  function toggleMenu() {
    setMenuVisible(!menuVisible);
  }

  function logout() {
    localStorage.clear();
    navigate("/signup");
  }

  return (
    <div>
      <div className="mobile-menu-toggle" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`nav-ul ${menuVisible ? "menu-visible" : ""}`}>
        {auth ? (
          <>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/add-product"}>Add Product</Link>
            </li>
            <li>
              <Link to={"/update/:id"}>Update Product</Link>
            </li>
            <li>
              <Link to={"/profile"}>Profile</Link>
            </li>
            <li className="logout-btn">
              <Link onClick={logout} to={"/signup"}>
                Logout
                <span className="profile-name">{JSON.parse(auth).name}</span>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to={"/signup"}>SignUp</Link>
            </li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Header;
