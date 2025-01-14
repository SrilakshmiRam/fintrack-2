import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import Context from '../../context/context'; // Import the context

import './index.css';

const expenses = [
  { category: "Food", amount: 0 },
  { category: "Transport", amount: 0 },
  { category: "Entertainment", amount: 0 },
  { category: "Bills", amount: 0 },
];

const AddTransaction = () => {
  const [expenseData, setExpenseData] = useState(expenses);
  const [userName, setUsername] = useState('');
  const [income, setIncome] = useState('');
  const { addTransaction } = useContext(Context);

  const navigate=useNavigate()


  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleIncomeChange = (e) => {
    setIncome(e.target.value);
  };

  const handleAmountChange = (index, newAmount) => {
    const updatedExpenses = expenseData.map((expense, i) =>
      i === index ? { ...expense, amount: newAmount } : expense
    );
    setExpenseData(updatedExpenses);
  };

  const handleAddTransaction = (e) => {
    e.preventDefault();

    const transactionItem = {
      id: uuidv4(),
      userName,
      income,
      expenses: expenseData,
    };

    addTransaction(transactionItem); // Directly pass the transactionItem
    navigate('/')
  };

  return (
    <div className='add-transaction-container'>
      <h1>Add Transaction</h1>
      <form onSubmit={handleAddTransaction}>
        <div className='input-container'>
          <label htmlFor='username'>User Name:</label>
          <input id='username' type='text' required 
          onChange={handleUsernameChange}
          value={userName} 
          className='input-text' />
        </div>
        <div className='input-container'>
          <label htmlFor='income'>Income:</label>
          <input id='income' type='text' required 
          onChange={handleIncomeChange}
          value={income}
          className='input-text' />
        </div>
        <div>
          {expenseData.map((expense, index) => (
            <div key={index} className='category-amount'>
              <label className='category'>{expense.category}:</label>
              <input
                type="number"
                value={isNaN(expense.amount) ? '' : expense.amount}
                onChange={(e) => handleAmountChange(index, parseInt(e.target.value))}
                className='input-amount'
                required
              />
            </div>
          ))}
        </div>
        <button type='submit' className='add-transaction-button'>Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;

