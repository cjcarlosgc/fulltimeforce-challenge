import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import footerBackgroundImage from '../assets/images/footer-sm.png';
import footerBackgroundImageLg from '../assets/images/footer-lg.png';

import '../assets/styles/components/Footer.scss'

export const Footer = () => {
    return (
        <footer className="footer">
            <picture>
                <source
                    media="(min-width: 768px)"
                    srcSet={footerBackgroundImageLg}
                />
                <img
                    className="footer-image"
                    src={footerBackgroundImage}
                    alt="Esta es una imágen de diseño para el footer"
                />
            </picture>
            <div className="copyright">
                <span>
                    Copyright © 2021 Todos los derechos reservados
                </span>
                <ul className="social-media">
                    <li>
                        <a
                            href="https://twitter.com/cjcarlosgc"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Twitter <FaTwitter/>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/cjcarlosgc"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub <FaGithub/>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/jean-carlos-garcia-a82753217/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn <FaLinkedin/>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
