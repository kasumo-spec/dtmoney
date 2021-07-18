import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../../services/api';

interface TransactionsProviderProps {
    children: ReactNode;
}

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

type NewTransaction = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsProviderData {
    transactions: Transaction[];
    addTransaction: (transaction: NewTransaction) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsProviderData>(
        {} as TransactionsProviderData,
);

export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {

    const [ transactions, setTransactions ] = useState<Transaction[]>( [] );

    const addTransaction = async (newTransaction: NewTransaction) => {
        const response = await api.post( '/transactions', {
            ...newTransaction,
            createdAt: new Date(),
        } );
        const { transaction } = response.data;
        setTransactions( [ ...transactions, transaction ] );
    };

    useEffect( () => {
        api.get( '/transactions' )
                .then( response => setTransactions( response.data.transactions ) );
    }, [] );

    return (
            <TransactionsContext.Provider value={ { transactions, addTransaction } }>
                { children }
            </TransactionsContext.Provider>
    );
};

export const useTransactions = () => useContext( TransactionsContext );