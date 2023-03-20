import React, { useContext } from "react";
import "./Cart.css";
import Card from "../UI/Card";
import CartContext from "../../store/CartContext";

function CartItem(props) {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    cartCtx.addItems({
      id: props.id,
      name: props.name,
      price: props.price,
    });
  };

  const removeFromCartHandler = () => {
    cartCtx.removeitems(props.id);
  };
  return (
    <Card className="cartItemContainer">
      <div className="cartItem">
        <h3>{props.name}</h3>
        <p>
          <span className="price">${props.price}</span>
          <br></br>
          <span className="amount">qunatity : {props.amount}</span>
        </p>
      </div>
      <div className="cartControls">
        <button onClick={addToCartHandler}>+</button>
        <button onClick={removeFromCartHandler}>-</button>
      </div>
    </Card>
  );
}

export default CartItem;
