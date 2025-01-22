import React from 'react';

const ExpenseList = ({ expenses, onRemoveExpense }) => {
  return (
    <div className="expense-list">
      <h3>Expense List</h3>
      <ul className="list-group">
        {expenses.map((expense, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between">
            <span>{expense.name}</span>
            <span>${expense.amount.toLocaleString()}</span>
            <button
              onClick={() => onRemoveExpense(index)}
              className="btn btn-danger btn-sm"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
