import React, { useState } from 'react';

const AddTransaction = ({ onAdd, onClose }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount || !category) return;
    onAdd({ name, amount: parseFloat(amount), category });
    setName("");
    setAmount("");
    setCategory("");
    onClose(); // Close modal after adding
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
      {/* Close Button */}
      <button
        className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-lg"
        onClick={onClose}
      >
        ✖
      </button>

      <h2 className="text-lg font-semibold text-gray-700">Add Transaction</h2>

      <form onSubmit={handleSubmit} className="space-y-3 mt-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className="w-full p-2 border rounded"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Category</option>
          <option value="Income">Income</option>
          <option value="Food">Food</option>
          <option value="Utilities">Utilities</option>
          <option value="Shopping">Shopping</option>
          <option value="Transportation">Transportation</option>
          <option value="Entertainment">Entertainment</option>
        </select>

        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
