import "./index.css";
import { useState } from "react";
import { transactionData } from "./data/transactionData";

function App() {
  const [transactions, setTransactions] = useState(transactionData);

  const totalIncome = () => {};
  const totalExpenses = () => {};
  const finalBalance = () => {};

  return (
    <div className="App">
      <id className="transactionsContainerMain">
        <header>
          <h1>
            TRANSACTION <br />
            SUMMARY
          </h1>

          <div className="filters">
            <button>All transactions</button>
            <button>Income Type</button>
            <button>Expense Type</button>
          </div>
        </header>

        <div id="allTransactionsContainer">
          {transactionData.map((item) => {
            return (
              <div>
                <h4>Type {item.type}</h4>
                <h4>Amount {item.amount}</h4>
              </div>
            );
          })}
        </div>

        <div className="calculations">
          <h3>Total Income</h3>
          <h3>Total Expenses</h3>
          <h3>Final Balance</h3>
        </div>
      </id>
    </div>
  );
}

export default App;
