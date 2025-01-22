import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');

  const handleAddExpense = () => {
    if (expenseName && expenseAmount && !isNaN(expenseAmount)) {
      onAddExpense({ name: expenseName, amount: Number(expenseAmount) });
      setExpenseName('');
      setExpenseAmount('');
    }
  };

  return (
    <div className="expense-form">
      <h3>Add an Expense</h3>
      <input
        type="text"
        value={expenseName}
        onChange={(e) => setExpenseName(e.target.value)}
        placeholder="Expense Name"
        className="form-control"
      />
      <input
        type="number"
        value={expenseAmount}
        onChange={(e) => setExpenseAmount(e.target.value)}
        placeholder="Expense Amount"
        className="form-control mt-2"
      />
      <button onClick={handleAddExpense} className="btn btn-success mt-2">
        Add Expense
      </button>
    </div>
  );
};

export default ExpenseForm;
