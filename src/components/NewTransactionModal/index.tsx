import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';
import { FormEvent, useState } from 'react';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import { api } from '../../services/api';

export const NewTransactionModal = () => {
    const [ isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState( false );
    const [ type, setType ] = useState( 'deposit' );

    const [ title, setTitle ] = useState( '' );
    const [ value, setValue ] = useState( 0 );
    const [ category, setCategory ] = useState( '' );

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen( true );
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen( false );
    }

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();
        const data = {
            title,
            value,
            category,
            type,
        };

        api.post( '/transactions', data );
    }

    return (
            <>
                <button type="button" onClick={ handleOpenNewTransactionModal }>Nova transação</button>
                <Modal
                        isOpen={ isNewTransactionModalOpen }
                        onRequestClose={ handleCloseNewTransactionModal }
                        overlayClassName="react-modal-overlay"
                        className="react-modal-content"
                >
                    <button
                            type="button"
                            onClick={ handleCloseNewTransactionModal }
                            className="react-modal-close">
                        <img src={ closeImg } alt="Fechar modal"/>
                    </button>

                    <Container onSubmit={ handleCreateNewTransaction }>
                        <h2>Cadastrar Transação</h2>

                        <input
                                placeholder="Título"
                                value={ title }
                                onChange={ event => setTitle( event.target.value ) }
                        />
                        <input
                                placeholder="Valor" type="number"
                                value={ value }
                                onChange={ event => setValue( Number( event.target.value ) ) }
                        />

                        <TransactionTypeContainer>
                            <RadioBox
                                    type="button"
                                    onClick={ () => setType( 'deposit' ) }
                                    isActive={ type === 'deposit' }
                                    activeColor="green"
                            >
                                <img src={ incomeImg } alt="Entrada"/>
                                <span>Entrada</span>
                            </RadioBox>
                            <RadioBox
                                    type="button"
                                    onClick={ () => setType( 'withdraw' ) }
                                    isActive={ type === 'withdraw' }
                                    activeColor="red"
                            >
                                <img src={ outcomeImg } alt="Saída"/>
                                <span>Saída</span>
                            </RadioBox>
                        </TransactionTypeContainer>

                        <input
                                placeholder="Categoria"
                                value={ category }
                                onChange={ event => setCategory( event.target.value ) }
                        />
                        <button type="submit">Cadastrar</button>
                    </Container>
                </Modal>
            </>
    );
};