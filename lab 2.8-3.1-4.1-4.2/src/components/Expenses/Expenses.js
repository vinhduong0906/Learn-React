import React, { useState } from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
function Expense(props) {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() === Number(filteredYear),
  );
  function saveExpenseFilterHandler(value) {
    setFilteredYear(value);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onSaveExpenseFilter={saveExpenseFilterHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
}
export default Expense;
