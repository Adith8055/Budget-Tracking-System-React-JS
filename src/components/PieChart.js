import React from 'react';
import { Chart } from 'react-google-charts';

const PieChart = ({ expenses }) => {
  const data = [
    ['Expense Name', 'Amount'],
    ...expenses.map((expense) => [expense.name, expense.amount]),
  ];

  const options = {
    title: 'Expense Breakdown',
    is3D: true,
  };

  return (
    <div className="pie-chart">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width="100%"
        height="400px"
      />
    </div>
  );
};

export default PieChart;
