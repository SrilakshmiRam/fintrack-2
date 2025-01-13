import { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Context from '../../context/context';
import './index.css';

const EditPage = () => {
  const { id } = useParams(); // Extract id from the URL
  const { transactions, updateTransactionData } = useContext(Context); // Access transactions and update function from context
  const navigate = useNavigate(); // To navigate back after editing

  // Ensure transactions is an array before calling find
  const transaction = Array.isArray(transactions) 
    ? transactions.find((item) => item.id === id)
    : null;

  // State to manage form fields
  const [formData, setFormData] = useState({
    id: '', // Add id field here
    income: '',
    expenses: [],
  });

  // Populate form data when the component mounts
  useEffect(() => {
    if (transaction) {
      setFormData({
        id: transaction.id, // Set the id in formData
        income: transaction.income,
        expenses: transaction.expenses,
      });
    }
  }, [transaction]);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleExpenseChange = (index, field, value) => {
    let updatedValue = value;

    // Convert the value to a number if the field is 'amount'
    if (field === 'amount') {
      updatedValue = parseFloat(value);

      // Check for NaN, and if it's NaN, reset to the last valid value (or zero)
      if (isNaN(updatedValue)) {
        updatedValue = 0;  // or set a default value like 0
      }
    }

    // Update the expense
    const updatedExpenses = [...formData.expenses];
    updatedExpenses[index] = { ...updatedExpenses[index], [field]: updatedValue };

    console.log(`Expense Updated: ${updatedExpenses[index].category} - ${updatedExpenses[index].amount}`);

    setFormData((prev) => ({
      ...prev,
      expenses: updatedExpenses,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    updateTransactionData(formData); // Pass the whole form data with the id included
    navigate('/'); // Redirect to the home page or transaction list
  };

  if (!transaction) {
    return <h1>Transaction Not Found</h1>; // Handle invalid IDs
  }

  return (
    <div className="edit-page">
      <h1>Edit Transaction</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="income">Income:</label>
          <input
            type="number"
            id="income"
            name="income"
            value={formData.income}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <h4>Expenses:</h4>
          {formData.expenses.map((expense, index) => (
            <div key={index} className="expense-item">
              <input
                type="text"
                placeholder="Category"
                value={expense.category}
                onChange={(e) =>
                  handleExpenseChange(index, 'category', e.target.value)
                }
              />
              <input
                type="number"
                placeholder="Amount"
                value={expense.amount}
                onChange={(e) =>
                  handleExpenseChange(index, 'amount', e.target.value)
                }
              />
            </div>
          ))}
        </div>
        <button type="submit" className="submit-button">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditPage;



