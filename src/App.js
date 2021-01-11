import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import Signup from "./Components/Login/Signup";
import { useEffect } from "react";
import { auth } from "./Firebase";
import { useStateValue } from "./ContextData/StateProvider";
import Payment from "./Components/Payment/Payment";

function App() {
  const [{}, dispatch] = useStateValue();
  // Create a listener to track who is singin/signup
  useEffect(() => {
    // listener
    auth.onAuthStateChanged((user) => {
      if (user) {
        // the user just logged in / the was logged in
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
