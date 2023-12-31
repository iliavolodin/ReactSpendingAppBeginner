import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function NewExpenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  // let filterInfoText = "2019, 2021, 2022";

  // const [filterInfoText, setFilterInfoText] = useState(
  //   "2019, 2020, 2021, 2022"
  // );

  // if (filteredYear === "2019") {
  //   filterInfoText = "2020, 2021, 2022";
  // } else if (filteredYear === "2020") {
  //   filterInfoText = "2019, 2021, 2022";
  // } else if (filteredYear === "2021") {
  //   filterInfoText = "2019, 2020, 2022";
  // } else {
  //   filterInfoText = "2019, 2020, 2021";
  // }

  const filterChangeHandler = function (selectedYear) {
    console.log("NewExpenses.js");
    console.log(selectedYear);
    setFilteredYear(selectedYear);

    //   if (selectedYear === "2019") {
    //     setFilterInfoText("2020, 2021, 2022");
    //   } else if (selectedYear === "2020") {
    //     setFilterInfoText("2019, 2021, 2022");
    //   } else if (selectedYear === "2021") {
    //     setFilterInfoText("2019, 2020, 2022");
    //   } else {
    //     setFilterInfoText("2019, 2020, 2021");
    //   }
  };

  const filteredExpenses = props.items.filter(function (expense) {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  //Пример вывода условного содержимого используя переменные.
  // let expensesContent = <p>No expenses found...</p>;
  // if (filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((expense) => {
  //     return (
  //       <ExpenseItem
  //         key={expense.id}
  //         title={expense.title}
  //         amount={expense.amount}
  //         date={expense.date}
  //       />
  //     );
  //   });
  // }

  return (
    <div className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/* <p>Data for years {filterInfoText} is hidden</p> */}

      {/* Пример без тернарного оператора вывода условного содержимого. */}
      {/* {filteredExpenses.length === 0 && <p>No expenses found...</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })} */}

      {/* Либо можно через тернарный оператор выводить условное содержимое */}
      {/* {filteredExpenses.length === 0 ? (
        <p>No expenses found...</p>
      ) : (
        filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })
      )} */}

      <ExpensesChart expenses={filteredExpenses} />

      <ExpensesList items={filteredExpenses} />
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItem> */}
    </div>
  );
}

export default NewExpenses;
