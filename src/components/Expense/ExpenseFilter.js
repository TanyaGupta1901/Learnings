import React from 'react'
import Card from '../UI/Card'

function ExpenseFilter() {
  return (
   <Card className="expense-filter">
     <label>Filter by year</label>
     <select>
        <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          </select>
   </Card>
  )
}

export default ExpenseFilter