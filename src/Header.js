//type rfce for skeleton of func comp

import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

import "./Header.css";
import { useStateValue } from "./ContextApi/StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  console.log("USERSSSSS<", user);

  const userAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          alt="amazonlogo"
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        {/* if no user then redirect to login */}
        <Link to={!user && "/login"}>
          <div onClick={userAuthentication} className="header_nav_option">
            <span className="header__nav__optionLineOne">
              Hello {user ? user.email : "Guest"}
            </span>
            <span className="header__nav__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header_nav_option">
          <span className="header__nav__optionLineOne">Returns</span>
          <span className="header__nav__optionLineTwo">& Orders</span>
        </div>
        <div className="header_nav_option">
          <span className="header__nav__optionLineOne">Your</span>
          <span className="header__nav__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_nav_option_basket">
            <ShoppingBasketIcon />
            <span className="header__nav__optionLineTwo header_nav_basketcount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
