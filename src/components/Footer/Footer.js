import * as React from 'react';
import './Footer.scss';
import logoFooter from './LogoFooter.png';
import Separator from '../Separator/Separator'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__logoAndText'>
                <div className='footer__logoContainer'>
                    <img src={logoFooter} alt='' className='footer__logo'></img>
                </div>
               <div className='footer__textContainer'>
                    <p>La Mente es Maravillosa is a property of Grupo MContigo
                        © 2012 – 2020. All rights reserved.
                        Los contenidos de esta publicación se redactan solo con fines informativos. 
                        En ningún momento pueden servir para facilitar diagnósticos o sustituir la labor de un profesional. 
                        Le recomendamos que contacte con su especialista de confianza.
                    </p>
                </div>
            </div>
            <Separator/>
            <ul className='footer__options'>
                <li><a href='https://www.google.com' target='_blanc'>Política de Cookies</a></li>
                <li><a href='https://www.google.com' target='_blanc'>Política de Privacidad</a></li>
                <li><a href='https://www.google.com' target='_blanc'>Términos y condiciones de uso</a></li>
                <li><a href='https://www.google.com' target='_blanc'>Cláusula Informativa de Consentimiento</a></li>
            </ul>
        </footer>
    );
}

export default Footer;