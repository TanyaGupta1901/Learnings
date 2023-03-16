import React, { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
import "./NewExpense.css";

function NewExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const inputHandler = (event) => {
    const property = event.target.name;
    if (property === "title") {
      if (event.target.value.length > 0) setError(false);
      setTitle(event.target.value);
    } else if (property === "amount") {
      if (event.target.value > 0) setError(false);
      setAmount(event.target.value);
    } else if (property === "date") {
      setDate(event.target.value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (title.length === 0) {
      setError(true);
      return;
    }

    if (!amount || amount <= 0) {
      setError(true);
      return;
    }
    const dataObject = {
      title,
      amount,
      date: new Date(date),
      id: Math.floor(Math.random() * 10),
    };
    props.addExpensehandler(dataObject);
    setSuccess(true);
    setDate("");
    setAmount("");
    setTitle("");
  };

  const onConfirm = () => {
    setSuccess(false);
  };

  return (
    <>
      {success && (
        <ErrorModal
          title="Success!"
          content="Expense Added"
          onConfirm={onConfirm}
        />
      )}
      <form
        onSubmit={submitHandler}
        className={error ? "expense-form error" : "expense-form"}
      >
        <div>
          <label> Title </label>
          <input
            placeholder="please enter item name"
            name="title"
            onChange={inputHandler}
            value={title}
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            placeholder="please enter item price"
            name="amount"
            value={amount}
            onChange={inputHandler}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            placeholder="dd-mm-yyyy"
            name="date"
            value={date}
            onChange={inputHandler}
          />
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
    </>
  );
}

export default NewExpenseForm;
