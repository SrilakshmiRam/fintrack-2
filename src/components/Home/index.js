import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../context/context'; // Import the context
import VisualReports from '../VisualReports';
import SettingsPage from '../SettingsPage';

import { RxHamburgerMenu } from "react-icons/rx";

import './index.css';

const HomePage = () => {
  const { transactions, deleteTransaction } = useContext(Context);
  const [showSettings, setShowSettings] = useState(false); // State to control visibility of SettingsPage
  const [isClickedBar,setIsClicked]=useState(false)
  const firstTransaction = Array.isArray(transactions) && transactions.length > 0 ? transactions[0] : null; // Safely access the first transaction
  const id = firstTransaction?.id; // Safely get the id

  // Check if transactions is an array and not empty before attempting to map over it
  const isTransactionsArray = Array.isArray(transactions);

  const handleBar=()=>{
    setIsClicked((prevState=>!prevState))
  }

  const onClickDelete = () => {
    deleteTransaction(id);
  };

  return (
    <div className="home-page">
      <nav className="header-container">
        <h1 className="header-title">FinTrack</h1>
        <div className="buttons-container">
          <Link to="/addTransaction/">
            <button className="button">Add</button>
          </Link>
          {id && (
            <>
              <Link to={`/edit/${id}`}>
                <button className="button">Edit</button>
              </Link>
              <button className="button" onClick={onClickDelete}>Delete</button>
            </>
          )}
        </div>
        <div className='mobile-devices'>
          <RxHamburgerMenu className='bar' onClick={handleBar}/>
        </div>
      </nav>
      {isClickedBar && (<div className="buttons-container-mobile">
          <Link to="/addTransaction/">
            <button className="button1">Add</button>
          </Link>
          {id && (
            <>
              <Link to={`/edit/${id}`}>
                <button className="button1">Edit</button>
              </Link>
              <button className="button1" onClick={onClickDelete}>Delete</button>
            </>
          )}
        </div>)}
      <h1>Transaction Details</h1>

      {/* Button to toggle settings page */}
      <div className="settings">
        <button className="settings-button" onClick={() => setShowSettings(!showSettings)}>
          {showSettings ? 'Close Settings' : 'Open Settings'}
        </button>
        {/* Conditional Rendering of SettingsPage */}
        {showSettings && <SettingsPage />}
      </div>

      <div>
        {!isTransactionsArray ? (
          <p className="error">Transactions data is not in the correct format.</p>
        ) : transactions.length === 0 ? (
          <p className="no-transactions">No transactions found.</p>
        ) : (
          transactions.map((transaction) => (
            <div key={transaction.id} className="transaction-card">
              <h3>{transaction.userName}</h3>
              <p>Income: ${transaction.income}</p>
              <div>
                <h4>Expenses</h4>
                <ul>
                  {transaction.expenses.map((expense, index) => (
                    <li key={index}>
                      {expense.category}: ${expense.amount}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        )}

        {/* Visual Reports */}
        {transactions.length > 0 && <VisualReports />}
      </div>
    </div>
  );
};


export default HomePage




