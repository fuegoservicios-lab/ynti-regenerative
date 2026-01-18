import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contacto" className="footer">
            <div className="container footer-grid">
                {/* Brand Section */}
                <div className="footer-brand">
                    <h2>Ynti Eusebio <span>MD MRM</span></h2>
                    <p className="brand-description">Liderando el cambio en medicina regenerativa y antienvejecimiento, comprometidos con tu bienestar integral y longevidad.</p>

                    <div className="social-links">
                        <a href="https://www.instagram.com/yntilaciencia?igsh=MXh6NGhpOGF3bXlnOQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <a href="https://www.facebook.com/share/17uAgkg7iz/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                    </div>
                </div>

                {/* Navigation */}
                <div className="footer-links">
                    <h3>Navegación</h3>
                    <ul>
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#experiencia">Experiencia</a></li>

                        <li><Link to="/historias-de-exito">Historias de Éxito</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="footer-contact">
                    <h3>Contacto</h3>
                    <div className="contact-item">
                        <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        <p>C. Toledo 2, San Pedro de Macorís 21000</p>
                    </div>
                    <div className="contact-item">
                        <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        <p>drynti@yntieusebiomd.com</p>
                    </div>
                    <div className="contact-item">
                        <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        <p>809-399-3181</p>
                    </div>
                </div>

                {/* Newsletter (Visual Only) */}
                <div className="footer-newsletter">
                    <h3>Boletín</h3>
                    <p>Suscríbase para recibir las últimas actualizaciones sobre medicina regenerativa.</p>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Tu correo electrónico" />
                        <button type="button" aria-label="Suscribirse">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container footer-bottom-content">
                    <p>&copy; {new Date().getFullYear()} Ynti Eusebio MD MRM. Todos los derechos reservados.</p>
                    <div className="footer-legal">
                        <Link to="/privacidad">Privacidad</Link>
                        <Link to="/terminos">Términos</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
