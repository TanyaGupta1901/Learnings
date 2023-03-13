import "./Expenses.css"
import Card from "../UI/Card"
import ExpenseDate from "./ExpenseDate.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'

import React from 'react'

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
        <div>{props.title}</div>
        <div>${props.amount}</div>
        <ExpenseDate date = {props.date}></ExpenseDate>
        <FontAwesomeIcon icon={faPencil} />
    </Card>
  )
}

export default ExpenseItem