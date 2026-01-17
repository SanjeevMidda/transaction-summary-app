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
      <div id="transactionsContainerMain">
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
          <div className="transactionHeadings">
            <h3>Type</h3>
            <h3>Income</h3>
          </div>

          {transactionData.map((item) => {
            return (
              <div class="mappedTransactions">
                <h4> {item.type}</h4>
                <h4>£{item.amount}</h4>
              </div>
            );
          })}
        </div>

        <div className="calculations">
          <h3>
            Total Income <br />
            £10
          </h3>
          <h3>
            Total Expenses <br /> £5
          </h3>
          <h3>
            Final Balance <br />
            £5
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
