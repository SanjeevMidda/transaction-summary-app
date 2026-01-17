import "./index.css";
import { useState } from "react";

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, type: "income", amount: 500 },
    { id: 2, type: "expense", amount: 200 },
    { id: 3, type: "income", amount: 300 },
    { id: 4, type: "expense", amount: 150 },
  ]);

  return <div className="App"></div>;
}

export default App;
