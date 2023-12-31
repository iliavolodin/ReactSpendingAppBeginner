import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = function (props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEneterdDate] = useState("");

  //Alternative state Way. Использовать UseState ({}) с объектом.
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = function (event) {
    // event.preventDefault();
    console.log(event.target.value);
    setEnteredTitle(event.target.value);

    //Alternative State way.
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = function (event) {
    setEnteredAmount(event.target.value);
    console.log(event.target.value);
    //alternative State Way
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = function (event) {
    setEneterdDate(event.target.value);
    console.log(event.target.value);
    //alternative State Way
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  //Общая функция обработчика событий.
  // const inputChangeHandler = function (id, value) {
  //   if (id === "title") {
  //     setEnteredTitle(value);
  //   } else if (id === "amount") {
  //     setEnteredAmount(value);
  //   } else {
  //     setEneterdDate(value);
  //   }
  // };

  const submitHandler = function (event) {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEneterdDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-09-30"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
