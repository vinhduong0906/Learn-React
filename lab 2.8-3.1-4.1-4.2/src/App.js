import React, { useState } from 'react';
import Expense from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
function App() {
  const [expenses, setExpenses] = useState([
    { id: 'e1', date: new Date(2020, 8, 14), title: 'Toilet Paper', amount: 94.12 },
    { id: 'e2', date: new Date(2021, 3, 12), title: 'New TV', amount: 799.67 },
    { id: 'e3', date: new Date(2021, 3, 28), title: 'Car Insurance', amount: 294.67 },
    { id: 'e4', date: new Date(2021, 6, 12), title: 'Car Insurance', amount: 294.67 },
  ]);

  const addExpenseHandler = (expense) => {
    setExpenses((expenses) => [...expenses, expense]);
  };
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expense expenses={expenses} />
    </div>
  );
}

export default App;
