import React, { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header';
import Balance from './components/Balance';
import Income from './components/Income';
import Expenses from './components/Expenses';
import TransactionList from './components/TransactionList';
import BudgetOverview from './components/BudgetOverview';

function App() {
  const [transactions, setTransactions] = useState(() => {
    // ✅ Load from localStorage only once (initial render)
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });
  // ✅ Save to localStorage whenever transactions change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);
  
  
  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  const deleteTransaction = (index) => {
    setTransactions(transactions.filter((_, i) => i !== index));
  };
  return (
    <div className='flex justify-center items-center min-h-screen rounded'>
      <div className="bg-gray-200 max-w-5xl p-7 ">
        <Header onAdd={addTransaction} />
        <div className="flex space-x-10 my-7">
          <Balance transactions={transactions} />
          <Income transactions={transactions} />
          <Expenses transactions={transactions} />
        </div>
        <div className="flex gap-7">
          <TransactionList transactions={transactions} onDelete={deleteTransaction} />
          <BudgetOverview transactions={transactions} />
        </div>
      </div>
    </div>
  );
}

export default App;
