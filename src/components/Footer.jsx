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
            </div>
        </footer>
    )
}
