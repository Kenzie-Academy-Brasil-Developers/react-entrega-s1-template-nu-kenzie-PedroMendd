import React, { useState } from "react";
import { FinanceForm } from "../../components/FinanceForm";
import { FinanceSection } from "../../components/FinanceSection";
import { ValorTotal } from "../../components/Total";
import { Header } from "../../components/header";
import styles from "./style.module.css";

export const HomePage = () => {
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleDeleteTransaction = (updatedTransactions) => {
    setTransactions(updatedTransactions);
  };

  return (
    <>
      <div className={styles.page}>
        <Header />
        <main>
          <div>
            <div className={styles.containerHome}>
              <FinanceForm onAddTransaction={handleAddTransaction} />
              <FinanceSection transactions={transactions} onDelete={handleDeleteTransaction} />
            </div>

            <ValorTotal transactions={transactions} />
          </div>
        </main>
      </div>
    </>
  );
};
