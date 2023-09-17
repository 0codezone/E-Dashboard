import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../SignUp/Sign.css";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch(`${process.env.REACT_APP_API}/products`);
    let response = await result.json();
    setProducts(response);
  };

  // --------------------------delete------------
  const deleteProduct = async (id) => {
    let result = await fetch(`${process.env.REACT_APP_API}/product/${id}`, {
      method: "Delete",
    });
    let response = await result.json();
    if (response) {
      alert("record is deleted");
      getProducts();
    }
  };

  // --------------------------update -------------
  const searchHandler = async (e) => {
    let key = e.target.value;
    if (key) {
      let result = await fetch(`${process.env.REACT_APP_API}/search/${key}`);
      result = await result.json();
      if (result) {
        setProducts(result);
      }
    } else {
      getProducts();
    }
  };

  return (
    <>
      <div className="centreTable">
        <h1>Product List</h1>
        <div className="searchProduct-bar">
          <input
            type="text"
            placeholder="Search Product"
            onChange={searchHandler}
          />
        </div>
        <table border={1}>
          <tbody>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Company</th>
              <th colSpan={2}>Opration</th>
            </tr>
            {products.length > 0 ? (
              products.map((item, key) => (
                <tr key={item._id}>
                  <td>{key + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td>{item.company}</td>
                  <td>
                    <button
                      className="deleteProduct"
                      type="button"
                      onClick={() => deleteProduct(item._id)}
                    >
                      DELETE
                    </button>
                  </td>
                  <td>
                    <Link className="updateProduct" to={"/update/" + item._id}>
                      EDIT
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6}>No Product Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Product;
