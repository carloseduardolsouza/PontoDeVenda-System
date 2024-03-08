import "./contasPagar.css"

// src/ContasAPagar.js
import React from 'react';

const contasAPagar = [
  {
    id: 1,
    fornecedor: 'Fornecedor A',
    valor: 500.00,
    dataVencimento: '2024-03-15',
    status: 'Pendente',
  },
  {
    id: 2,
    fornecedor: 'Fornecedor B',
    valor: 300.00,
    dataVencimento: '2024-03-20',
    status: 'Pendente',
  },
  {
    id: 3,
    fornecedor: 'Fornecedor C',
    valor: 800.00,
    dataVencimento: '2024-03-25',
    status: 'Pendente',
  },
];

const ContasAPagar = () => {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <div className="contas-a-pagar-container">
      <h2>Contas a Pagar</h2>
      <div className="contas-list">
        {contasAPagar.map((conta) => (
          <div key={conta.id} className="conta-item">
            <div className="conta-info">
              <div className="conta-fornecedor">{conta.fornecedor}</div>
              <div className="conta-valor">{formatCurrency(conta.valor)}</div>
              <div className="conta-details">
                <div>Status: {conta.status}</div>
                <div>Vencimento: {conta.dataVencimento}</div>
              </div>
            </div>
            <div className={`status ${conta.status.toLowerCase()}`}>{conta.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContasAPagar;
