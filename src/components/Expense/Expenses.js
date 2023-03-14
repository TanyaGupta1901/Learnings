import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterYear = async (value) => {
    setFilteredYear(value);
  };
  const filterdeArray = props.items.filter((item) => {
    const date = new Date(item.date);
    return date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        yearHandler={filterYear}
      ></ExpenseFilter>
      {filterdeArray.length > 0 ? (
        filterdeArray.map((item) => (
          <ExpenseItem
            key={item.id}
            date={item.date}
            title={item.title}
            amount={item.amount}
          />
        ))
      ) : (
        <p style={{ color: "white" }}>No expenses Available</p>
      )}
    </Card>
  );
};

export default Expenses;
