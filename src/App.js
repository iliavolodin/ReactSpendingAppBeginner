import React, { useState } from "react";
import NewExpenses from "./components/Expenses/NewExpenses";
import NewExpense from "./components/NewExpense/NewExpense";

// import AlternativeExpenseItem from "./components/Expenses/AlternativeExpenseItem.js";

//Альтернативный способ написания ф-ций в React, это синтаксис стрелочных ф-ций. Как и Arrow Function в JS.
// const App = () => {some code...};

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = function (expense) {
    // console.log("In App.js");
    // console.log(expense);
    // setExpenses([expense, ...expenses]);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });

    console.log(expenses);
    console.log(DUMMY_EXPENSES);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <NewExpenses items={expenses}></NewExpenses>
      {/* <Expenses /> */}
      {/* <AlternativeExpenseItem expense={expenses[0]}></AlternativeExpenseItem> */}
    </div>
  );
}

export default App;
