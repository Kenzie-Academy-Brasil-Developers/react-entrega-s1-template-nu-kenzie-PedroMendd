import React from "react";
import { FinanceCard } from "./FinanceCard";
import style from "./style.module.css";

export const FinanceList = ({ transactions, onDelete }) => {
  const handleDelete = (id) => {
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
    console.log("Transações antes da exclusão:", transactions);
    console.log("Transações após a exclusão:", updatedTransactions);
    onDelete(updatedTransactions);
  };
  

  return (
    <div className={style.financeList}>
      {transactions.map((transaction) => (
        <FinanceCard
          key={transaction.id}
          transaction={transaction}
          onDelete={() => handleDelete(transaction.id)}
        />
      ))}
    </div>
  );
};
