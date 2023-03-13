import React from "react";
import Card from "../UI/Card";
import "./NewExpense.css";

function NewExpenseForm() {
  return (
    <Card className="new-expense">
      <form className="expense-form">
        <div>
          <label> Title </label>
          <input placeholder="please enter item name" name="title"></input>
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            placeholder="please enter item price"
            name="price"
          ></input>
        </div>
        <div>
          <label>Date</label>
          <input type="date" placeholder="dd-mm-yyyy"></input>
        </div>
      </form>
      <div className="new-expense-button">
          <button  >Add Expense</button>
        </div>
    </Card>
  );
}

export default NewExpenseForm;
