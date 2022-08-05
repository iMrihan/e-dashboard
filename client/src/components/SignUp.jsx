import React from "react";
import { useState } from "react";

const SignUp = () => {
  let initial = {
    name: "",
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(initial);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
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
