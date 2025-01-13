import { createContext } from 'react'; // Make sure to import 'createContext' from React

const Context = createContext({
    transactionData: [],
    updateTransactionData: () => {},
    deleteTransaction: () => {},
    addTransaction:()=>{},
});

export default Context;
