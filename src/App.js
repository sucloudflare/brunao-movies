import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import { BrowserRouter } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import AppRoutes from './config/Routes'; // Certifique-se de que o nome não conflita com o componente Routes do react-router-dom.

function App() {
    return (
        <BrowserRouter>
            <>
                <Header />
                <AppRoutes />
                <Footer />
            </>
        </BrowserRouter>
    );
}

export default App;
