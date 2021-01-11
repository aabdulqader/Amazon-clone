import React, { useState } from "react";
import "./Login.css";
import logo from "./logo.png";
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase";
import { auth } from "../../Firebase";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = (event) => {
    event.preventDefault();
    // Firebase Login
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));

    setEmail("");
    setPassword("");
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={logo} alt="" />
      </Link>
      <div className="login__inputContainer">
        <h1>Sign-In</h1>
        <form>
          <div className="login__formControl">
            <label>Email </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
          </div>
          <div className="login__formControl">
            <label>Password </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
            />
          </div>
          <button disabled={!email && !password} onClick={signin} type="submit">
            Sign In
          </button>
        </form>
      </div>
      <div className="signin">
        <small>New to Amazon?</small>
        <Link to="/signup">
          <button className="signinBtn">Create your Amazon account</button>
        </Link>
      </div>
      <div className="login__footer">
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

export default Login;
