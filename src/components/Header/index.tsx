import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';
import { NewTransactionModal } from '../NewTransactionModal';

export function Header() {


    return (
            <Container>
                <Content>
                    <img src={ logoImg } alt="dt money"/>
                    <NewTransactionModal/>
                </Content>
            </Container>
    );
}