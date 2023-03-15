import React from "react";
import Card from "../UI/Card";
import Chart from "../Chart/Chart";

function ExpenseFilter(props) {
  return (
    <Card className="expense-filter">
      <Card>
        <Chart />
      </Card>
      <Card className="filter-controls">
        <label>Filter by year</label>
        <select
          value={props.selected}
          onChange={(event) => {
            props.yearHandler(event.target.value);
          }}
        >
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </Card>
    </Card>
  );
}

export default ExpenseFilter;
