import React from 'react';

const Transactions = ({ transactions,onDelete }) => {
  return (
    <div className="card">
      <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
      <div className="transaction-list">
        {transactions.map((transaction, index) => (
          <div
            key={index}
            className={`transaction-item ${transaction.category === "Income" ? "income" : "expense"}`}
          >
            <span>{transaction.name}</span>
            <div className="flex items-center gap-3">
              <span className={transaction.category === "Income" ? "text-green-500" : "text-red-500"}>
                {transaction.category === "Income" ? "+" : "-"}${Math.abs(transaction.amount).toFixed(2)}
              </span>
              {/* Delete Button (Appears on Hover) */}
              <button
                onClick={() => onDelete(index)}
                className="text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;