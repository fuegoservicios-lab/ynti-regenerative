import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { name: 'Inicio', href: '/#inicio' },
        { name: 'Blog', href: '/#blog' },
        { name: 'Experiencia', href: '/#experiencia' },
        { name: 'Reservar Cita', href: 'https://api.whatsapp.com/send/?phone=18093993181&text&type=phone_number&app_absent=0', isButton: true },
    ];

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <div className="logo">
                    Ynti Eusebio <span>MD MRM</span>
                </div>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className={link.isButton ? 'btn-nav' : 'nav-link'}
                            onClick={() => setIsOpen(false)}
                            target={link.href.startsWith('http') ? '_blank' : undefined}
                            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <button className="mobile-menu-btn" onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
