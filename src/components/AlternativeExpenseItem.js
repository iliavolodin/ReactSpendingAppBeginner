import "./ExpenseItem.css";

function AlternativeExpenseItem(props) {
  return (
    <div className="expense-item">
      <div className="expense-item__description">
        <div>{props.expense.date.toISOString()}</div>
        <h2>{props.expense.title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
    </div>
  );
}

export default AlternativeExpenseItem;
