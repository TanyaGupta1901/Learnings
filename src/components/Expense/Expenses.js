import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  console.log("year changed");

  const filterYear = async (value) => {
    setFilteredYear(value);
  };

  const filteredArray = props.items.filter((item) => {
    const date = new Date(item.date);
    return date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} yearHandler={filterYear} />
      {filteredArray.length > 0 ? (
        filteredArray.map((item) => (
          <ExpenseItem
            key={item.id}
            date={item.date}
            title={item.title}
            amount={item.amount}
            onDelete={props.deleteHandler}
            id={item.id}
          />
        ))
      ) : (
        <p style={{ color: "white" }}>No expenses Available</p>
      )}
    </Card>
  );
};

export default Expenses;
