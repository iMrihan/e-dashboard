import React from "react";
import { useState } from "react";

export default function Login() {
  let initial = {
    email: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(initial);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
  };
  return (
    <div className="login">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="inputBox"
          placeholder="Enter Email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          className="inputBox"
          placeholder="Enter Password"
          name="password"
          onChange={handleChange}
        />
        <input className="login-button" type="submit" value="Login" />
      </form>
    </div>
  );
}
