import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import Card from "../UI/Card";
import "./Header.css";

function Header(props) {
  return (
    <Card className="header">
      <h1>SWIGGY</h1>
      <HeaderCartButton setShowModal={props.setShowModal} />
      <div className="banner"></div>
    </Card>
  );
}

export default Header;
