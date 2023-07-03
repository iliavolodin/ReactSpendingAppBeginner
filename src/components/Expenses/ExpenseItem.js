import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // const month = props.date.toLocaleString("en-US", { month: "long" });
  // const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  // const year = props.date.getFullYear();
  const [title, setTitle] = useState(props.title); //хук useState всегда вовзращает массив с 2 эелементами - 1 эл. - измененное текущее значение состояния
  //2 - функция, для обновления этого значения (чтобы снова сделать текущее состояние, если такое понадобится).

  const clickHandler = function () {
    setTitle("Updated!");
    console.log("clicked");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        {/* <div>{props.date.toISOString()}</div> */}
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button
        onClick={() => {
          console.log("clicked");
        }}
      >
        Change Item
      </button> */}
      <button onClick={clickHandler}>Change Item</button>
    </Card>
  );
}

export default ExpenseItem;
