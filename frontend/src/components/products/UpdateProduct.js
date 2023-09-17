import "../SignUp/Sign.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

async function getProductDetails(productId) {
  const result = await fetch(
    `${process.env.REACT_APP_API}/product/${productId}`
  );
  const data = await result.json();
  return data;
}

function UpdateProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const productDetails = await getProductDetails(params.id);
      setName(productDetails.name);
      setPrice(productDetails.price);
      setCategory(productDetails.category);
      setCompany(productDetails.company);
    }

    fetchData();
  }, [params.id]);

  const getUpdateData = async () => {
    const result = await fetch(
      `${process.env.REACT_APP_API}/product/${params.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({ name, price, category, company }),
      }
    );

    let response = await result.json();
    alert("Product updated", response);
    navigate("/");
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
        </div>
        <div className="inputWrapper-btn">
          <button type="button" onClick={getUpdateData}>
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateProduct;
