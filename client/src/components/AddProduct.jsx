import React, { useState } from "react";

export default function AddProduct() {
  const initial = {
    name: "",
    price: "",
    category: "",
    company: "",
    userId: JSON.parse(localStorage.getItem("user"))._id,
  };
  const [product, setProduct] = useState(initial);
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !product.name ||
      !product.price ||
      !product.category ||
      !product.company
    ) {
      setError(true);
      return false;
    }

    let result = await fetch("http://localhost:3005/add-product", {
      method: "Post",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    console.log(result);
  };

  return (
    <div className="product">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          className="inputBox"
          type="text"
          placeholder="Enter product name"
          name="name"
          onChange={handleChange}
        />
        {error && !product.name && (
          <span className="invalid-input">Enter valid name</span>
        )}
        <input
          required
          className="inputBox"
          type="text"
          placeholder="Enter product price"
          name="price"
          onChange={handleChange}
        />

        {error && !product.price && (
          <span className="invalid-input">Enter valid price</span>
        )}
        <input
          required
          className="inputBox"
          type="text"
          placeholder="Enter product category"
          name="category"
          onChange={handleChange}
        />
        {error && !product.category && (
          <span className="invalid-input">Enter valid category</span>
        )}
        <input
          required
          type="text"
          className="inputBox"
          placeholder="Enter product company"
          name="company"
          onChange={handleChange}
        />
        {error && !product.company && (
          <span className="invalid-input">Enter valid company</span>
        )}
        <input className="product-button" type="submit" value="Add Product" />
      </form>
    </div>
  );
}
