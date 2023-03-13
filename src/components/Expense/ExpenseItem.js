import "./Expenses.css"
import Card from "../UI/Card"
import ExpenseDate from "./ExpenseDate.js"

import React from 'react'

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
        <div>{props.title}</div>
        <div>${props.amount}</div>
        <ExpenseDate date = {props.date}></ExpenseDate>
    </Card>
  )
}

export default ExpenseItem