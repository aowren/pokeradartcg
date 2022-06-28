import React from 'react';
import './footer.css';
import { useLocation } from 'react-router-dom';

const Footer = () => {

    //Hide component
    let location = useLocation()

    if (location.pathname.match('/login') ||  location.pathname.match('/register')) {
        return null
    }

    return (
        <footer className='footer-container'>
            <div className='footer-content'>
                <ul>
                    <li className='list-header'>PokéRadar</li>
                    <li className='list-content'>Contact: aowren21@gmail.com</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
