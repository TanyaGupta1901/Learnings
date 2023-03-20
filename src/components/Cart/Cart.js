import React, { useContext } from "react";
import "./Cart.css";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";
import Card from "../UI/Card";

function Cart() {
  const cartCtx = useContext(CartContext);
  const { items, totalAmount } = cartCtx;
  return (
    <Card className="cart">
      <div className="cartItems">
        {items.map((item) => {
          return <CartItem {...item} key={item.id} />;
        })}
      </div>
      <div className="totalAmount">
        <h2>
          Total Amount : <span>${parseFloat(totalAmount).toFixed(2)}</span>
        </h2>
      </div>
    </Card>
  );
}

export default Cart;
