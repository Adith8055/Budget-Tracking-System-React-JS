import React, { useState } from 'react';
import './app.css';
import { Chart } from 'react-google-charts';

const App = () => {
  const [budget, setBudget] = useState(0);
  const [currentBudget, setCurrentBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');

  const handleSetBudget = () => {
    if (budget > 0) {
      setCurrentBudget(budget);
      setBudget('');
    }
  };

  const handleAddExpense = () => {
    if (expenseName && expenseAmount > 0) {
      setExpenses([...expenses, { name: expenseName, amount: parseFloat(expenseAmount) }]);
      setExpenseName('');
      setExpenseAmount('');
    }
  };

  const handleRemoveExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  const chartData = [
    ['Expense', 'Amount'],
    ...expenses.map((expense) => [expense.name, expense.amount]),
  ];

  return (
    <div className="container">
      <header className="header">
        <h1>Budget Tracker</h1>
        <p>Effortlessly track your budget and expenses</p>
      </header>

      {/* Set Budget Section */}
      <div className="section">
        <h2>Set Your Budget</h2>
        <div className="input-group">
          <input
            type="number"
            className="form-control"
            value={budget || ''}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="Enter your budget"
          />
          <button className="btn btn-primary" onClick={handleSetBudget}>
            Set Budget
          </button>
        </div>
        {currentBudget > 0 && (
          <p className="budget-info">
            Your budget: <span className="highlight">${currentBudget}</span>
          </p>
        )}
      </div>

      {/* Add Expense Section */}
      <div className="section">
        <h2>Add an Expense</h2>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
            placeholder="Expense Name"
          />
          <input
            type="number"
            className="form-control"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
            placeholder="Expense Amount"
          />
          <button className="btn btn-success" onClick={handleAddExpense}>
            Add Expense
          </button>
        </div>
      </div>

      {/* Expense List Section */}
      <div className="section">
        <h2>Expense List</h2>
        {expenses.length === 0 ? (
          <p className="empty-list">No expenses added yet.</p>
        ) : (
          <ul className="list-group">
            {expenses.map((expense, index) => (
              <li key={index} className="list-group-item">
                <span>{expense.name} - ${expense.amount}</span>
                <button className="btn btn-danger btn-sm" onClick={() => handleRemoveExpense(index)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <p className="total-expenses">
          Total Expenses: <span className={`highlight ${totalExpenses > currentBudget ? 'over-budget' : ''}`}>
            ${totalExpenses}
          </span>
        </p>
        {totalExpenses > currentBudget && (
          <p className="warning">
            Warning: Your total expenses exceed your budget!
          </p>
        )}
      </div>

      {/* Pie Chart Section */}
      <div className="section">
        <h2>Expense Breakdown</h2>
        {expenses.length === 0 ? (
          <p className="empty-list">No expenses to display.</p>
        ) : (
          <Chart
            chartType="PieChart"
            data={chartData}
            options={{
              title: 'Expense Breakdown',
              pieHole: 0.4,
              colors: ['#007bff', '#28a745', '#ffc107', '#dc3545', '#6c757d'],
            }}
            width="100%"
            height="400px"
          />
        )}
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Adith Rajeev | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default App;
