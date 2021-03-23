import './App.css';
import AddTransactions from './components/AddTransactions';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header title='Expense Tracker' />
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransactions/>
    </GlobalProvider>
  );
}

export default App;
