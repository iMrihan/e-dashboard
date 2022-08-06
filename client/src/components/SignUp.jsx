import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  let initial = {
    name: "",
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(initial);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let result = await fetch("http://localhost:3005/register", {
      method: "Post",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result));
    if (result) {
      navigate("/");
    }
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="inputBox"
          type="text"
          placeholder="Enter Name"
          name="name"
          required
          onChange={handleChange}
        />
        <input
          className="inputBox"
          type="text"
          placeholder="Enter Email"
          name="email"
          required
          onChange={handleChange}
        />
        <input
          className="inputBox"
          type="password"
          placeholder="Enter Password"
          name="password"
          required
          onChange={handleChange}
        />
        <input type="submit" value="Sign Up" className="signup-button" />
      </form>
    </div>
  );
};

export default SignUp;
