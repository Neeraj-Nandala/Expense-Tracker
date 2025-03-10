import React, { useState } from 'react';
import AddTransaction from './AddTransaction';

function Header({ onAdd }) {
  const [showTransactionForm, setShowTransaction] = useState(false);

  return (
    <>
      <div className="w-full max-w-5xl flex justify-between items-center bg-blue-600 text-white p-4 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold">Expense Tracker</h1>
        <button
          className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-200 transition"
          onClick={() => setShowTransaction(true)}
        >
          Add Transaction
        </button>
      </div>

      {showTransactionForm && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <AddTransaction onAdd={onAdd} onClose={() => setShowTransaction(false)} />
        </div>
      )}
    </>
  );
}

export default Header;
