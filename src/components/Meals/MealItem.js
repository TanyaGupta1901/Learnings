import React, { useContext } from "react";
import Card from "../UI/Card";
import "./Meals.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/CartContext";

function MealItem(props) {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    cartCtx.addItems({
      id: props.id,
      name: props.name,
      price: props.price.toFixed(2),
    });
  };

  const removeFromCartHandler = () => {
    cartCtx.removeitems(props.id);
  };

  return (
    <Card>
      <li className="meal">
        <div>
          <h3 className="name">{props.name}</h3>
          <div className="description">{props.description}</div>
          <div className="price">${props.price}</div>
        </div>
        <div>
          <MealItemForm
            id={props.id}
            addToCartHandler={addToCartHandler}
            removeFromCartHandler={removeFromCartHandler}
          />
        </div>
      </li>
    </Card>
  );
}

export default MealItem;
