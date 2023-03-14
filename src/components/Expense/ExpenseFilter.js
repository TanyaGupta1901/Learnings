import React from "react";
import Card from "../UI/Card";

function ExpenseFilter(props) {
  return (
    <Card className="expense-filter">
      <Card>monthly track</Card>
      <Card className="filter-controls">
        <label>Filter by year</label>
        <select value={props.selected} onChange={(event) => {props.yearHandler(event.target.value)}}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </Card>
    </Card>
  );
}

export default ExpenseFilter;
