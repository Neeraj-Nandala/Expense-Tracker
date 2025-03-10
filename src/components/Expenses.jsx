import React from 'react';
import { assets } from '../assets/assets';

const Expenses = ({ transactions }) => {
  const expenses = transactions
    .filter((t) => t.category !== "Income")
    .reduce((acc, t) => acc + t.amount, 0);

  return (
    <div className="bg-white px-20 py-8 rounded-md shadow-md">
      <div className="flex gap-2">
        <img src={assets.decrease} className="w-6 h-6" alt="Expenses Icon" />
        <h2 className="text-xl font-semibold">Expenses</h2>
      </div>
      <p className="text-2xl font-bold text-red-600">${expenses.toFixed(2)}</p>
    </div>
  );
};

export default Expenses;
