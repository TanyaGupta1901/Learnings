import React, { useEffect, useState } from 'react'
import Card from "../UI/Card"
import "./Expenses.css"
import ExpenseItem from "./ExpenseItem"
import ExpenseFilter from './ExpenseFilter'


function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2021');

    const filterYear = async (value) => {
        setFilteredYear(value);
        
    }

    useEffect(() => {
        console.log(filteredYear);
    }, [filteredYear])

  return (
    <Card className="expenses">
        <ExpenseFilter selected = {filteredYear} yearHandler = {filterYear}></ExpenseFilter>
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