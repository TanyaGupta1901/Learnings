import React from 'react'
import Card from "../UI/Card"
import "./Expenses.css"
import ExpenseItem from "./ExpenseItem"


function Expenses(props) {
  return (
    <Card className="expenses">
        {props.items.map((item) => {
            return <ExpenseItem
            date={item.date}
            title={item.title}
            amount={item.amount}
            ></ExpenseItem>
        })}
    </Card>
  )
}

export default Expenses