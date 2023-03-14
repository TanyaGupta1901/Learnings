import { useState, useEffect } from 'react';
import './App.css';
import Expenses from './components/Expense/Expenses';
import NewExpenseForm from './components/NewExpense/NewExpenseForm';
function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenseList, setExpenseList] = useState(expenses);
  
  const addExpensehandler = (newExpense) => {
   setExpenseList([...expenseList, newExpense])
  }

  useEffect(() => {
    console.log(expenseList)
  }, [expenseList])
  

  return (
    <div>
        <h1 style={{color:"white",textAlign:"center"}}>Expense tracker</h1>
        <NewExpenseForm addExpensehandler ={addExpensehandler}></NewExpenseForm>
        <Expenses items={expenseList}></Expenses>
    </div>
  );
}

export default App;
