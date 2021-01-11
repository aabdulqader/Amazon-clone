import React from "react";
import "./Header.css";
import logo from "../../logo.png";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "../../ContextData/StateProvider";
import { auth } from "../../Firebase";

const Header = () => {
  const [{ cart, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      // user signout
      auth.signOut();
    }
  };

  return (
    <header className="sticky__header">
      <div className="header">
        <Link to="/">
          <img className="header__logo" src={logo} alt="Amazon" />
        </Link>

        <div className="header__search">
          <input className="header__searchInput" type="search" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
          <Link to={!user && "/login"}>
            <div className="header__option">
              <small>
                Hello!{" "}
                <span onClick={handleAuthentication} className="login__span">
                  {user ? "| sign out |" : ""}
                </span>
              </small>
              <h4>{user ? user?.email : "Sign In"}</h4>
            </div>
          </Link>
          <div className="header__option">
            <small>Returns</small>
            <h4>& Orders</h4>
          </div>
          <div className="header__option">
            <small>Your</small>
            <h4>Prime</h4>
          </div>
          <div className="header__option">
            <Link to={user ? "checkout" : "login"}>
              <h3 className="header__cart">
                <AddShoppingCartIcon className="header__cartIcon" />
                {cart.length}
              </h3>
            </Link>
          </div>
        </div>
      </div>

      <div className="header__footer">
        <p>All</p>
        <p>Today's Deals</p>
        <p>Customer Service</p>
        <p>Gift Cards</p>
        <p>Sell</p>
        <p>Registry</p>
      </div>
    </header>
  );
};

export default Header;
