import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface ITransaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<ITransaction, "id" | "createdAt">;

interface ITransactionsProviderProps {
  children: ReactNode;
}

interface ITransactionsContextData {
  transactions: Array<ITransaction>;
  createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<ITransactionsContextData>(
  {} as ITransactionsContextData
);

export function TransactionsProvider({ children }: ITransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Array<ITransaction>>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  function createTransaction(transaction: TransactionInput) {
    api.post("/transactions", transaction);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
