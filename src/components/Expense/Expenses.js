import React from 'react'
import Card from "../UI/Card"
import "./Expenses.css"
import ExpenseItem from "./ExpenseItem"
import ExpenseFilter from './ExpenseFilter'


function Expenses(props) {
  return (
    <Card className="expenses">
        <ExpenseFilter></ExpenseFilter>
        {props.items.map((item) => {
            return <ExpenseItem
            key={item.id}
            date={item.date}
            title={item.title}
            amount={item.amount}
            ></ExpenseItem>
        })}
    </Card>
  )
}

export default Expenses