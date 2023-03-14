import React, { useState } from "react";
import NewExpenseForm from "./NewExpenseForm";
import Card from "../UI/Card";

function NewExpense(props) {
  const [isEditng, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    console.log("called");
    setIsEditing(false);
  };

  return (
    <Card className="new-expense">
      {!isEditng && (
        <div className="new-expense-button" onClick={startEditingHandler}>
          <button>Add new expense</button>
        </div>
      )}

      {isEditng && (
        <NewExpenseForm
          addExpensehandler={props.addExpensehandler}
          stopEditingHandler={stopEditingHandler}
        />
      )}
    </Card>
  );
}

export default NewExpense;
