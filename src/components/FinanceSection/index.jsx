import React from "react";
import { FinanceList } from "./FinanceList";
import styles from "./style.module.scss";

export const FinanceSection = ({ transactions, onDelete }) => {
  return (
    <section className={styles.financeSection}>
      <div>
        <h3 className={styles.financeSectionTitle}>Resumo financeiro</h3>
        {transactions.length === 0 && (
          <p className={styles.financeSectionText}>
            Você ainda não possui nenhum lançamento
          </p>
        )}
        <FinanceList transactions={transactions} onDelete={onDelete} />
      </div>
    </section>
  );
};
