import "./index.css";
import { useState } from "react";
import { transactionData } from "./data/transactionData";

function App() {
  const [transactions, setTransactions] = useState(transactionData);

  const totalIncome = () => {
    let filteringIncome = transactions.filter(
      (transaction) => transaction.type === "income"
    );

    const totalIncomeCalculated = filteringIncome.reduce(
      (sum, item) => sum + item.amount,
      0
    );

    return totalIncomeCalculated;
  };

  const totalExpenses = () => {};
  const finalBalance = () => {};

  const showAllTransactions = () => {};

  const filterIncome = () => {
    const filteredTransactions = transactions.filter((item) => {
      return item.type === "income";
    });

    console.log(filteredTransactions);

    setTransactions((transactions) => filteredTransactions);

    console.log(transactions);
  };

  const filterExpenseType = () => {};

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
            <button onClick={filterIncome}>Income Type</button>
            <button>Expense Type</button>
          </div>
        </header>

        <div id="allTransactionsContainer">
          <div className="transactionHeadings">
            <h3>Type</h3>
            <h3>Amount</h3>
          </div>

          {transactionData.map((item) => {
            return (
              <div
                className="mappedTransactions"
                style={{ color: item.type === "income" ? "green" : "red" }}
              >
                <h4> {item.type}</h4>
                <h4>£{item.amount}</h4>
              </div>
            );
          })}
        </div>

        <div className="calculations">
          <h3>
            Total Income <br />
            <p>£{totalIncome()}</p>
          </h3>
          <h3>
            Total Expenses <br /> £5
          </h3>
          <h3>
            Final Balance <br />
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
