import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function HeaderCartButton() {
  return (
    <div>
      <span>
        <FontAwesomeIcon icon={faShoppingCart} />
      </span>
      <span></span>
      <span></span>
    </div>
  );
}

export default HeaderCartButton;
