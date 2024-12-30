import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/logo1.png';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">Brunão Movies</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">Início</Link>  {/* Traduzido de 'Home' */}
                        <Link to="/">Contato</Link>  {/* Traduzido de 'Contact us' */}
                        <Link to="/">Termos de Serviço</Link>  {/* Traduzido de 'Term of services' */}
                        <Link to="/">Sobre nós</Link>  {/* Traduzido de 'About us' */}
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Ao vivo</Link>  {/* Traduzido de 'Live' */}
                        <Link to="/">FAQ</Link>  {/* Manteve-se o mesmo, 'FAQ' é amplamente utilizado */}
                        <Link to="/">Premium</Link>  {/* Manteve-se o mesmo */}
                        <Link to="/">Política de Privacidade</Link>  {/* Traduzido de 'Privacy policy' */}
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Você deve assistir</Link>  {/* Traduzido de 'You must watch' */}
                        <Link to="/">Lançamento recente</Link>  {/* Traduzido de 'Recent release' */}
                        <Link to="/">Top IMDB</Link>  {/* Manteve-se o mesmo */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
