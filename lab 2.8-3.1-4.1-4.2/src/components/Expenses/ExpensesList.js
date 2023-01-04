import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';
function ExpensesList(props) {
  if (props.filteredExpenses.length === 0)
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  if (props.filteredExpenses.length > 0)
    return (
      <ul>
        {props.filteredExpenses.map((item) => {
          return (
            <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
          );
        })}
      </ul>
    );
}
export default ExpensesList;
