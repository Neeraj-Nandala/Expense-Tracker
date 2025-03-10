import React from 'react';
import { assets } from '../assets/assets';

const Balance = ({ transactions }) => {
  const total = transactions.reduce(
    (acc, transaction) => acc + (transaction.category === "Income" ? transaction.amount : -transaction.amount),
    0
  );

  return (
    <div className="bg-white px-20 py-8 rounded-md shadow-md">
      <div className="flex gap-2">
        <img src={assets.balance} className="w-6 h-6" alt="Balance Icon" />
        <h2 className="text-xl font-semibold">Balance</h2>
      </div>
      <p className="text-2xl font-bold">${total.toFixed(2)}</p>
    </div>
  );
};

export default Balance;
