import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';
import { Providers } from './hooks';

createServer( {
    models: {
        transaction: Model,
    },
    seeds(server) {
        server.db.loadData( {
            transactions: [
                {
                    id: 1,
                    title: 'Transaction 1',
                    amount: 400,
                    type: 'deposit',
                    category: 'Food',
                    createdAt: new Date( '2021-07-17 23:00:00' ),
                }, {
                    id: 2,
                    title: 'Transaction 2',
                    amount: 200,
                    type: 'withdraw',
                    category: 'iFood',
                    createdAt: new Date( '2021-07-17 23:30:00' ),
                },
            ],
        } );
    },
    routes() {
        this.namespace = 'api';
        this.get( '/transactions', () => {
            return this.schema.all( 'transaction' );
        } );
        this.post( '/transactions', (schema, request) => {
            const data = JSON.parse( request.requestBody );
            return schema.create( 'transaction', data );
        } );
    },
} );

ReactDOM.render(
        <React.StrictMode>
            <Providers>
                <App/>
            </Providers>
        </React.StrictMode>,
        document.getElementById( 'root' ),
);
