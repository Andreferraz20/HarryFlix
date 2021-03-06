import React from 'react';
import Logo from '../../assets/img/HarryFlix.png';
import './Menu.css';
import Button from '../Button'
//import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="AluraFlix" />
            </a>
            <Button as="a" href="/" className="ButtonLink">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;