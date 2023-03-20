import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import CartContext from "../../store/CartContext";

function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;
  const numberOfItems = items?.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <>
      <button className="cart-button" onClick={props.setShowModal}>
        <span>
          <FontAwesomeIcon icon={faShoppingCart} />
        </span>
        <span>Your Cart</span>
        <span>{numberOfItems}</span>
      </button>
    </>
  );
}

export default HeaderCartButton;
