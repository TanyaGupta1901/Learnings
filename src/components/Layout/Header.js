import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import Card from "../UI/Card";

function Header() {
  return (
    <Card>
      <h1>Swiggy</h1>
      <HeaderCartButton />
    </Card>
  );
}

export default Header;
