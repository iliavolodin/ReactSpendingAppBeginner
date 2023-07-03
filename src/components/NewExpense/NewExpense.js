import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = function (props) {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler = function (enteredExpenseData) {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };

    console.log(expenseData);
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const startShowFormHandler = function () {
    setShowForm(true);
  };

  const hideShowFormHandler = function () {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {!showForm && (
        <button onClick={startShowFormHandler}>Add new Expense</button>
      )}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hideShowFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
