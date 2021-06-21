import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faHamburger, faRadiation, faSatellite } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="footer-basic">
            <footer> 
                <div className="social">
                    <a href="/"><FontAwesomeIcon icon={faHamburger}/></a>
                    <a href="/"><FontAwesomeIcon icon={faSatellite}/></a>
                    <a href="/"><FontAwesomeIcon icon={faAt}/></a>
                    <a href="/"><FontAwesomeIcon icon={faRadiation}/></a>
                    </div>
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="/">Home</a></li>
                    <li className="list-inline-item"><a href="/">Services</a></li>
                    <li className="list-inline-item"><a href="/">About</a></li>
                    <li className="list-inline-item"><a href="/">Terms</a></li>
                    <li className="list-inline-item"><a href="/">Privacy Policy</a></li>
                </ul>
                <p className="copyright">PsychoTech © 2021</p>
            </footer>
        </div>

    );
};

export default Footer;