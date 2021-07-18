import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal';

Modal.setAppElement( '#root' );

export function App() {
    return (
            <>
                <Header/>
                <Dashboard/>
                <GlobalStyle/>
            </>
    );
}