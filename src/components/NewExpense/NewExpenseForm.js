import React, {useState} from "react";
import Card from "../UI/Card";
import "./NewExpense.css";

function NewExpenseForm(props) {

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');

  const inputHandler = (event) =>{
    const property = event.target.name;
    if(property === 'title')
    {
      setTitle(event.target.value);
    } else if ( property === 'price') {
      setPrice(event.target.value);
    } else if ( property === 'date')
    {
      setDate(event.target.value);
    }
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const dataObject = {title, price, date, id : Math.floor(Math.random() * 10)};
    props.addExpensehandler(dataObject);
    setDate('');
    setPrice('');
    setTitle('');
  }
  


  return (
    <Card className="new-expense">
      <form className="expense-form" onSubmit={submitHandler}>
        <div>
          <label> Title </label>
          <input 
          placeholder="please enter item name" 
          name="title"
          onChange={inputHandler}
          value={title}
          ></input>
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            placeholder="please enter item price"
            name="price"
            value={price}
            onChange={inputHandler}
          ></input>
        </div>
        <div>
          <label>Date</label>
          <input 
          type="date" 
          placeholder="dd-mm-yyyy" 
          name="date"
          value={date}
          onChange={inputHandler}
          ></input>
        </div>
        <div className="new-expense-button">
          <button type="submit">Add Expense</button>
        </div>
      </form>
      
    </Card>
  );
}

export default NewExpenseForm;
