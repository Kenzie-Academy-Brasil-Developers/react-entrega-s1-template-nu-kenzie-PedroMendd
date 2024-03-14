import React from "react";
import styles from "./styles.module.css";

export const ValorTotal = ({ transactions }) => {
  const calcularTotal = () => {
    return transactions.reduce((total, transaction) => {
      return total + transaction.valor;
    }, 0);
  };

  return (
    <div className={styles.ValorTotal}>
      <div className={styles.containerTotal}>
        <h3>Total</h3>
        <p className={styles.totalValue}>
          {calcularTotal().toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
    </div>
  );
};
