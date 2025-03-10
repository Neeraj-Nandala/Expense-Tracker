import React from 'react';

const BudgetOverview = ({ transactions }) => {
  const totalBudget = 20000;
  const expenses = transactions.filter((t) => t.category !== "Income");

  const categoryExpenses = expenses.reduce((acc, t) => {
    acc[t.category] = (acc[t.category] || 0) + t.amount;
    return acc;
  }, {});

  return (
    <div className="card budget-overview">
      <h2 className="text-lg font-semibold mb-4">Budget Overview</h2>
      <div className="space-y-4">
        {Object.entries(categoryExpenses).map(([category, amount]) => {
          const percentage = (amount / totalBudget) * 100;
          return (
            <div key={category}>
              <p className="text-sm font-medium">{category}: ${amount.toFixed(2)}</p>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div
                  className="h-full transition-all duration-500"
                  style={{
                    width: `${Math.min(percentage, 100)}%`,
                    backgroundColor: percentage > 100 ? "#ef4444" : "#3b82f6"
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BudgetOverview;
