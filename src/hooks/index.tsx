import { ReactNode } from 'react';
import { TransactionsProvider } from './Transactions';


interface ProvidersProps {
    children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
    return (
            <TransactionsProvider>
                { children }
            </TransactionsProvider>
    );
};