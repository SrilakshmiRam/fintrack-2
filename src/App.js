// App.js
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, {useState } from 'react';
import Context from './context/context';
import Home from './components/Home';
import EditPage from './components/EditPage';
import AddTransaction from './components/AddTransaction';
import './index.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);


  // Update transaction data
  const updateTransactionData = (newData) => {
    setTransactions((prevTransactions) =>
      prevTransactions.map((transaction) =>
        transaction.id === newData.id ? { ...transaction, ...newData } : transaction
      )
    );
  };

  // Delete transaction
  const deleteTransaction = (id) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction.id !== id)
    );
  };

  //Add Transaction 
  const addTransaction = (newData) => {
    setTransactions((prevTransactions) => [...prevTransactions, newData]); // Append to the existing array
  };
  


  return (
    <Context.Provider value={{ transactions, updateTransactionData, deleteTransaction,addTransaction }}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/edit/:id' element={<EditPage />} />
          <Route exact path='/addTransaction/' element={<AddTransaction/>} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
};

export default App;



