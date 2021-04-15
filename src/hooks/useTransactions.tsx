import { createContext, ReactNode, useContext, useEffect, useState } from "react";
// import { api } from "../services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: string;
}

interface ProviderProp {
  children: ReactNode;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionProvider({ children }: ProviderProp) {

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // useEffect(() => {
  //   api.get('/transactions')
  //     .then(response => setTransactions(response.data.transactions))
  // }, [])

  useEffect(() => {
    setTransactions([{
      id: 1,
      title: 'Freelance de Web',
      type: 'deposit',
      amount: 6000,
      category: 'Dev',
      createdAt: new Date().toString()
    },
    {
      id: 2,
      title: 'Compras Mercado',
      type: 'withdraw',
      amount: 500,
      category: 'Compras',
      createdAt: new Date().toString()
    }])
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {

    // const response = await api.post('/transactions', transactionInput)

    // const { transaction } = response.data

    // setTransactions([
    //   ...transactions,
    //   transaction
    // ]) 
    const transaction = {
      ...transactionInput,
      id: Math.random(),
      createdAt: new Date().toString()
    }

    setTransactions([
      ...transactions,
      transaction
    ])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}