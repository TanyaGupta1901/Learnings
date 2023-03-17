import React from "react";
import Card from "../UI/Card";
import "./Meals.css";
import MealItemForm from "./MealItemForm";

function MealItem(props) {
  return (
    <Card>
      <li className="meal">
        <div>
          <h3 className="name">{props.name}</h3>
          <div className="description">{props.description}</div>
          <div className="price">${props.price}</div>
        </div>
        <div>
          <MealItemForm id={props.id} />
        </div>
      </li>
    </Card>
  );
}

export default MealItem;
