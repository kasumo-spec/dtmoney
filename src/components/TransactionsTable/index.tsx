import { Container } from './styles';
import { useEffect } from 'react';

export function TransactionsTable() {

    useEffect( () => {
        fetch( 'http://localhost:3000/api/transactions' )
                .then( response => response.json() )
                .then( data => console.log( data ) );
    }, [] );

    return (
            <>
                <Container>
                    <table>
                        <thead>
                        <tr>
                            <th>Título</th>
                            <th>Valor</th>
                            <th>Categoria</th>
                            <th>Data</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Analise de Riscos</td>
                            <td className="deposit">R$3000</td>
                            <td>Auditoria</td>
                            <td>16/07/2021</td>
                        </tr>
                        <tr>
                            <td>Aluguel</td>
                            <td className="withdraw">- R$1000</td>
                            <td>Casa</td>
                            <td>16/07/2021</td>
                        </tr>
                        </tbody>
                    </table>
                </Container>
            </>
    );
}