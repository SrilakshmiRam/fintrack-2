# Personal Finance Management App

## Overview

> **Note:** This app is designed specifically for individual users who want to manage their personal finances effectively without requiring backend integration.

This project is a personal finance management application built using **React.js**. It allows individual users to:
- Track their income and expenses.
- Categorize transactions.
- Generate visual reports.
- Manage budgets for each category.

The app uses **React Context API** for state management to handle user data, update transactions, and delete transactions efficiently.

---

## Features

- **Track Transactions:**  
  Allows users to add, edit, and delete transactions using input forms and React state.

- **Categorization:**  
  Users can view transactions under predefined categories such as **Food**, **Transport**, **Entertainment**, etc.

- **Visual Reports:**  
  Displays spending patterns using **pie charts** and **bar graphs**.

- **Budget Management:**  
  Users can set monthly budget limits for each category and receive notifications if they exceed the budget.

---

## Technologies Used

- **Frontend:** React.js (with Create React App)  
- **State Management:** React Context API  
- **Charting Library:** Recharts  
- **Database:** Local state (no backend/database)

---

## Setup Instructions

1. **Clone the Repository:**  
   ```bash
   git clone https://github.com/SrilakshmiRam/fintrack-1.git




2. **Navigate to the project directory:**

  cd newproject

3.**Navigate to the myapp folder:**

  cd myapp

4.**Install dependencies:**

  npm install

5.***Start the development server:**

  npm start


The app will run on http://localhost:3000 by default.


## How It Works 

## State Management with React Context

The app uses the React Context API to manage the state of transactions and categories. This helps in:

- Centralizing the app's data.
- Ensuring that any updates to transactions (add, delete, or modify) automatically reflect across the application.

## Transaction Handling

1.**Adding Transactions:**

Users can input details (amount, category, description) in a form. The form data is stored in the React state, and the transaction is added to the state array.

2.**Deleting Transactions:**

The app uses the filter() method to delete a transaction. When a user clicks the "Delete" button, the selected transaction is removed from the state.

3.**Categorization:**

Transactions are displayed under predefined categories such as Food, Transport, and Entertainment, and users can track their spending in each category.
Repository

The source code for this project is available at:

https://github.com/SrilakshmiRam/fintrack-2
