//type rfce for skeleton of func comp

import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

import "./Header.css";
import { useStateValue } from "./ContextApi/StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
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
        <div className="header_nav_option">
          <span className="header__nav__optionLineOne">Hello User</span>
          <span className="header__nav__optionLineTwo">Sign In</span>
        </div>
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
