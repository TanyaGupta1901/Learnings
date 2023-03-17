import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Card from "../UI/Card";
import "./Header.css";

function HeaderCartButton(props) {
  return (
    <>
      <button className="cart-button" onClick={props.setShowModal}>
        <span>
          <FontAwesomeIcon icon={faShoppingCart} />
        </span>
        <span>Your Cart</span>
        <span>3</span>
      </button>
    </>
  );
}

export default HeaderCartButton;
