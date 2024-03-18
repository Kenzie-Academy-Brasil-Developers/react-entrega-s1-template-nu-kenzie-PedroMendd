import React, { useState } from "react";
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/header";
import { ValorTotal } from "./components/Total";
import { FinanceForm } from "./components/FinanceForm";
import { FinanceSection } from "./components/FinanceSection";
import "./styles/index.scss";

function App() {
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleDeleteTransaction = (updatedTransactions) => {
    setTransactions(updatedTransactions);
  };

  return (
    <div>
      <HomePage>
        <Header />
        <FinanceForm onAddTransaction={handleAddTransaction} />
        <FinanceSection
          transactions={transactions}
          onDelete={handleDeleteTransaction}
        />
        <ValorTotal transactions={transactions} />
      </HomePage>
    </div>
  );
}

export default App;
