import React, { useContext, useState } from "react";
import CartContext from "../../store/CartContext";

function MealItemForm(props) {
  const [count, setCount] = useState(0);
  const cartCtx = useContext(CartContext);

  const itemFromContext =
    cartCtx.items[cartCtx.items.findIndex((item) => item.id === props.id)];

  return (
    <div className="mealItemForm">
      <button
        onClick={() => {
          setCount(count + 1);
          props.addToCartHandler();
        }}
      >
        +
      </button>
      <span>{itemFromContext?.amount || 0}</span>
      <button
        onClick={() => {
          if (count > 0) setCount(count - 1);
          props.removeFromCartHandler();
        }}
        disabled={cartCtx.items.length === 0 ? true : false}
      >
        -
      </button>
    </div>
  );
}

export default MealItemForm;
