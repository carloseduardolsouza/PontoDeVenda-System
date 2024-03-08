import "./caixa.css"

// src/CashFlow.js
import React from 'react';

const transactions = [
  {
    id: 1,
    date: '2024-03-01',
    description: 'Venda de Produto A',
    category: 'Vendas',
    type: 'income',
    amount: 500.00,
  },
  {
    id: 2,
    date: '2024-03-02',
    description: 'Pagamento de Fornecedor B',
    category: 'Compras',
    type: 'expense',
    amount: -200.00,
  },
  {
    id: 3,
    date: '2024-03-03',
    description: 'Serviços Prestados',
    category: 'Serviços',
    type: 'income',
    amount: 300.00,
  },
];

const CashFlow = () => {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <div className="cashflow-container">
      <h2>Fluxo de Caixa</h2>
      <div className="transaction-list">
        {transactions.map((transaction) => (
          <div key={transaction.id} className={`transaction-item ${transaction.type}`}>
            <div className="transaction-info">
              <div className="transaction-date">{transaction.date}</div>
              <div className="transaction-description">{transaction.description}</div>
              <div className="transaction-category">{transaction.category}</div>
            </div>
            <div className="transaction-amount">{formatCurrency(transaction.amount)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CashFlow;
