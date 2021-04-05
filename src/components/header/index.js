import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "./styles/header.css";
import HeaderOption from "./headerOption";

//MUI STUFFS
import SearchIcon from "@material-ui/icons/Search";
import { AddShoppingCart } from "@material-ui/icons";

function Header() {
  return (
    <div>
      <div className="header">
        <div className="header_left">
          <img src="images/logo.png" alt="logo" />

          <div className="header_search">
            <SearchIcon />
            <input placeholder="Search" type="text" />
          </div>
        </div>

        <div className="header_right">
          <Nav.Link as={NavLink} to="/cart">
            <HeaderOption Icon={AddShoppingCart} />
          </Nav.Link>
          <HeaderOption avatar={true} />
        </div>
      </div>
    </div>
  );
}

export default withRouter(Header);
