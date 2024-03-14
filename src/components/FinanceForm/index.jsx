import React, { useState } from "react";

export const FinanceForm = ({ onAddTransaction }) => {
  const [formData, setFormData] = useState({
    descricao: "",
    valor: "",
    tipo: "Entrada",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!formData.descricao.trim() || !formData.valor.trim()) {
      alert("Por favor, preencha os campos de descrição e valor.");
      return;
    }

    const newFinance = {
      id: generateUniqueId(),
      descricao: formData.descricao,
      valor:
        formData.tipo === "Despesa"
          ? -parseFloat(formData.valor)
          : parseFloat(formData.valor),
      tipo: formData.tipo,
    };

    onAddTransaction(newFinance);

    setFormData({ descricao: "", valor: "", tipo: "Entrada" });
  };

  const generateUniqueId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  };

  return (
    <section>
      <form className="form" onSubmit={handleFormSubmit}>
        <label htmlFor="descricao">Descrição</label>
        <input
          type="text"
          id="descricao"
          name="descricao"
          value={formData.descricao}
          placeholder="Digite aqui sua descrição"
          onChange={handleInputChange}
        />
        <span>Ex: compra de roupas</span>
        <label htmlFor="valor">Valor (R$)</label>
        <input
          type="text"
          id="valor"
          name="valor"
          value={formData.valor}
          placeholder="1"
          onChange={handleInputChange}
        />
        <label htmlFor="tipo-de-valor">Tipo de Valor</label>
        <select
          name="tipo"
          id="tipo-de-valor"
          value={formData.tipo}
          onChange={handleInputChange}
        >
          <option value="Entrada">Entrada</option>
          <option value="Despesa">Despesa</option>
        </select>
        <button className="btn">Inserir valor</button>
      </form>
    </section>
  );
};
