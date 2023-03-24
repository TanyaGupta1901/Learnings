import React, { useState, useCallback } from "react";
import ErrorModal from "../UI/ErrorModal";
import "./NewExpense.css";
import useInput from "../../hooks/useInput";

function NewExpenseForm(props) {
  const [isFormValid, setIsFormValid] = useState(false);
  const TitleValidator = useCallback((title) => title !== "", []);
  const amountValidator = useCallback((amount) => {
    console.log(parseInt(amount) > 0);
    return parseInt(amount) > 0;
  }, []);

  const {
    value: title,
    valueChangeHandler: valueChangeHandlerTitle,
    blurChangeHandler: blurChangeHandlerTitle,
    hasError: hasErrorTitle,
    isValid: isValidTitle,
    resetValue: resetTitle,
  } = useInput(TitleValidator, "");

  const {
    value: amount,
    valueChangeHandler: valueChangeHandlerAmount,
    blurChangeHandler: blurChangeHandlerAmount,
    hasError: hasErrorAmount,
    isValid: isValidAmount,
    resetValue: resetAmount,
  } = useInput(amountValidator, 0);
  console.log(title, amount);
  const {
    value: date,
    valueChangeHandler: valueChangeHandlerDate,
    blurChangeHandler: blurChangeHandlerDate,
    hasError: hasErrorDate,
    isValid: isValidDate,
    resetValue: resetDate,
  } = useInput((value) => {
    const today = new Date();
    const input = new Date(value);
    return today.getTime() >= input.getTime();
  }, Date.now());
  const [success, setSuccess] = useState(false);
  if (isValidTitle && isValidDate && isValidAmount) setIsFormValid(true);

  const submitHandler = (event) => {
    event.preventDefault();

    if (!isFormValid) return;
    const dataObject = {
      title,
      amount,
      date: new Date(date),
      id: Math.floor(Math.random() * 10),
    };
    props.addExpensehandler(dataObject);
    setSuccess(true);
    resetTitle();
    resetAmount();
    resetDate();
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
      <form onSubmit={submitHandler} className="expense-form">
        <div>
          <label>{`Title ${
            hasErrorTitle ? ": Should not be left empty" : ""
          }`}</label>
          <input
            id="title"
            placeholder="please enter item name"
            name="title"
            onChange={valueChangeHandlerTitle}
            onBlur={blurChangeHandlerTitle}
            value={title}
            className={hasErrorTitle ? "error" : "null"}
          />
        </div>
        <div>
          <label>{`Date ${
            hasErrorDate ? ": Should not be in future" : ""
          }`}</label>
          <input
            id="date"
            type="date"
            placeholder="dd-mm-yyyy"
            name="date"
            onChange={valueChangeHandlerDate}
            onBlur={blurChangeHandlerDate}
            className={hasErrorDate ? "error" : "null"}
            max={Date.now()}
            value={date}
          />
        </div>
        <div>
          <label>{`Amount ${
            hasErrorAmount ? ": Should be greater 0" : ""
          }`}</label>
          <input
            id="amount"
            type="number"
            placeholder="please enter item price"
            name="amount"
            onChange={valueChangeHandlerAmount}
            onBlur={blurChangeHandlerAmount}
            value={amount}
            className={hasErrorAmount ? "error" : "null"}
            min={0}
            max={10}
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
          <button
            type="submit"
            disabled={isFormValid}
            style={{ opacity: isFormValid ? 1 : 0.5 }}
          >
            Add Expense
          </button>
        </div>
      </form>
    </>
  );
}

export default NewExpenseForm;
