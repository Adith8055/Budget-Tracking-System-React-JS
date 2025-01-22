import React, { useState } from 'react';

const BudgetInput = ({ onBudgetSet }) => {
  const [budget, setBudget] = useState('');

  const handleSetBudget = () => {
    if (budget && !isNaN(budget)) {
      onBudgetSet(Number(budget));
      setBudget('');
    }
  };

  return (
    <div className="budget-input">
      <h3>Set Your Budget</h3>
      <input
        type="number"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        placeholder="Enter your budget"
        className="form-control"
      />
      <button onClick={handleSetBudget} className="btn btn-primary mt-2">
        Set Budget
      </button>
    </div>
  );
};

export default BudgetInput;
