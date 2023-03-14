import React, { useState } from "react";
import "./NewExpense.css";

function NewExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const inputHandler = (event) => {
    const property = event.target.name;
    if (property === "title") {
      setTitle(event.target.value);
    } else if (property === "amount") {
      setAmount(event.target.value);
    } else if (property === "date") {
      setDate(event.target.value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const dataObject = {
      title,
      amount,
      date: new Date(date),
      id: Math.floor(Math.random() * 10),
    };
    props.addExpensehandler(dataObject);
    setDate("");
    setAmount("");
    setTitle("");
  };

  return (
    <form className="expense-form" onSubmit={submitHandler}>
      <div>
        <label> Title </label>
        <input
          placeholder="please enter item name"
          name="title"
          onChange={inputHandler}
          value={title}
        ></input>
      </div>
      <div>
        <label>Price</label>
        <input
          type="number"
          placeholder="please enter item price"
          name="amount"
          value={amount}
          onChange={inputHandler}
        ></input>
      </div>
      <div>
        <label>Date</label>
        <input
          type="date"
          placeholder="dd-mm-yyyy"
          name="date"
          value={date}
          onChange={inputHandler}
        ></input>
      </div>
      <div className="new-expense-button">
        <button
          onClick={() => {
            console.log("clicked");
            props.stopEditingHandler();
          }}
        >
          Cancel
        </button>
      </div>
      <div className="new-expense-button">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default NewExpenseForm;
