import React, { useState } from "react";
import "./Signup.css";
import logo from "./logo.png";
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase";
import { auth } from "../../Firebase";

const Signup = () => {
  // change url
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const signup = (event) => {
    event.preventDefault();
    // Firebase Register
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
        if (user) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));

    setEmail("");
    setName("");
    setPassword("");
  };

  return (
    <div className="signup">
      <Link to="/">
        <img className="signup__logo" src={logo} alt="" />
      </Link>
      <div className="signup__inputContainer">
        <h1>Create an account</h1>
        <form>
          <div className="signup__formControl">
            <label>Full Name </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              required
            />
          </div>
          <div className="signup__formControl">
            <label>Email </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
          </div>
          <div className="signup__formControl">
            <label>Password </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
            />
          </div>
          <button disabled={!email && !password} onClick={signup} type="submit">
            Sign Up
          </button>
        </form>
      </div>
      <div className="signin">
        <small>Already have an account?</small>
        <Link to="/login">
          <button className="signin-btn">Log In</button>
        </Link>
      </div>
      <div className="signup__footer">
        <div>
          <small>Conditions of Use</small>
          <small>Privacy Notice</small>
          <small>Help</small>
        </div>
        <small> &copy; 3000-3021, Amazon.com, inc. or its affiliates</small>
      </div>
    </div>
  );
};

export default Signup;
