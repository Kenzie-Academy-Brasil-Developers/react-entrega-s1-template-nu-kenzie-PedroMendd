import React from "react";
import style from "./style.module.scss";

export const FinanceCard = ({ transaction, onDelete }) => {
  const handleDelete = () => {
    onDelete(transaction.id);
  };

  const spanClassName =
    transaction.tipo === "Despesa" ? style.despesa : style.entrada;

  return (
    <div className={style.financeContainer}>
      <span className={spanClassName}></span>
      <div className={style.flexBox}>
        <div className={style.typeContainer}>
          <h1>{transaction.descricao}</h1>
          <p className={style.typeText}>{transaction.tipo}</p>
        </div>
        <div className={style.moneyContainer}>
          <p>
            {transaction.valor.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <button onClick={handleDelete}>Excluir</button>
        </div>
      </div>
    </div>
  );
};
