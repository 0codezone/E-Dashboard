import React from "react";
import "../SignUp/Sign.css";
import { useState } from "react";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  const getProductData = async (e) => {
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }

    e.preventDefault();
    console.log(name, price, category, company);
    let userId = JSON.parse(localStorage.getItem("user"))._id;

    let result = await fetch(`${process.env.REACT_APP_API}/add-product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ name, price, category, company, userId }),
    });

    let response = await result.json();
    alert("product added", response);

    setName("");
    setPrice("");
    setCategory("");
    setCompany("");
  };

  return (
    <div className="centerForm">
      <form>
        <div className="inputWrapper">
          <input
            type="text"
            placeholder="Product Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
          {error && !name && (
            <span className="invalid-input">Enter valid name</span>
          )}
        </div>
        <div className="inputWrapper">
          <input
            type="text"
            placeholder="Product Price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            value={price}
          />
          {error && !price && (
            <span className="invalid-input">Enter valid price</span>
          )}
        </div>
        <div className="inputWrapper">
          <input
            type="text"
            placeholder="Category"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            value={category}
          />
          {error && !category && (
            <span className="invalid-input">Enter valid category</span>
          )}
        </div>
        <div className="inputWrapper">
          <input
            type="text"
            placeholder="Company Name"
            onChange={(e) => {
              setCompany(e.target.value);
            }}
            value={company}
          />
          {error && !company && (
            <span className="invalid-input">Enter valid company</span>
          )}
        </div>
        <div className="inputWrapper-btn">
          <button type="button" onClick={getProductData}>
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
