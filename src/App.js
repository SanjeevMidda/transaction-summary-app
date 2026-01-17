import "./index.css";
import { useState } from "react";
import { transactionData } from "./data/transactionData";

function App() {
  const [transactions, setTransactions] = useState(transactionData);

  const totalIncome = () => {};
  const totalExpenses = () => {};
  const finalBalance = () => {};

  return <div className="App"></div>;
}

export default App;
