import React from 'react';
import { assets } from '../assets/assets';

const Income = ({ transactions }) => {
  const income = transactions
    .filter((t) => t.category === "Income")
    .reduce((acc, t) => acc + t.amount, 0);

  return (
    <div className="bg-white px-20 py-8 rounded-md shadow-md">
      <div className="flex gap-2">
        <img src={assets.increase} className="w-6 h-6" alt="Income Icon" />
        <h2 className="text-xl font-semibold">Income</h2>
      </div>
      <p className="text-2xl font-bold text-green-500">${income.toFixed(2)}</p>
    </div>
  );
};

export default Income;
