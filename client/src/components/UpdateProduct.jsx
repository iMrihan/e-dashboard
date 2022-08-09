import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function UpdateProduct() {
  const initial = {
    name: "",
    price: "",
    category: "",
    company: "",
    userId: JSON.parse(localStorage.getItem("user"))._id,
  };
  const [product, setProduct] = useState(initial);

  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async (e) => {
    let result = await fetch(`http://localhost:3005/product/${id}`);

    result = await result.json();
    setProduct(result);
    console.log(result);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await fetch(`http://localhost:3005/product/${id}`, {
      method: "Put",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    if (result) {
      navigate("/");
    }
    console.log(result);
  };

  return (
    <div className="product">
      <h1>Update Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          className="inputBox"
          value={product.name}
          type="text"
          placeholder="Enter product name"
          name="name"
          onChange={handleChange}
        />

        <input
          required
          className="inputBox"
          value={product.price}
          type="text"
          placeholder="Enter product price"
          name="price"
          onChange={handleChange}
        />

        <input
          required
          className="inputBox"
          value={product.category}
          type="text"
          placeholder="Enter product category"
          name="category"
          onChange={handleChange}
        />

        <input
          required
          type="text"
          className="inputBox"
          value={product.company}
          placeholder="Enter product company"
          name="company"
          onChange={handleChange}
        />

        <input
          className="product-button"
          type="submit"
          value="Update Product"
        />
      </form>
    </div>
  );
}
