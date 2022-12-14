import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:3005/products");
    result = await result.json();
    setProducts(result);
  };

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:3005/product/${id}`, {
      method: "Delete",
    });

    result = await result.json();
    if (result) {
      getProducts();
    }
  };

  const searchHandle = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:3005/search/${key}`);
      result = await result.json();
      if (result) {
        setProducts(result);
      }
    } else {
      getProducts();
    }
  };

  console.log(products);
  return (
    <div className="products-list">
      <h3>Product List</h3>
      <input
        type="text"
        onChange={searchHandle}
        className="search-product-box"
        placeholder="Search Product"
      />
      <ul>
        <li>S.No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Operation-1</li>
        <li>Operation-2</li>
      </ul>

      {products.length > 0 ? (
        products.map((el, index) => (
          <ul key={el._id}>
            <li>{index + 1}</li>
            <li>{el.name}</li>
            <li>{el.price}</li>
            <li>{el.category}</li>
            <li>{el.company}</li>
            <li>
              {" "}
              <button onClick={() => deleteProduct(el._id)}>Delete</button>
            </li>
            <li>
              <Link to={`/update/${el._id}`}>Update</Link>
            </li>
          </ul>
        ))
      ) : (
        <h1>No Result Found</h1>
      )}
    </div>
  );
}
