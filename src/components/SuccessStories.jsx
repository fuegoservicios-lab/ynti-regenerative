import React from 'react';
import { Link } from 'react-router-dom';
import './SuccessStories.css';

const SuccessStories = () => {
    return (
        <section className="success-section">
            <div className="success-background">
                <div className="fluid-shape shape-1"></div>
                <div className="fluid-shape shape-2"></div>
                <div className="fluid-shape shape-3"></div>
            </div>

            <div className="container success-content">
                <div className="success-left">
                    <div className="success-header">
                        <h2 className="success-title">HISTORIAS<br />DE ÉXITO</h2>
                        <p className="success-subtitle">Testimonios de Pacientes</p>
                    </div>

                    <div className="video-container">
                        <div className="video-placeholder"></div>
                    </div>
                </div>

                <div className="success-right">
                    <div className="link-group">
                        <h3>Tratamientos Innovadores</h3>
                    </div>
                    <div className="link-group">
                        <h3>Terapias Avanzadas</h3>
                        <p>Introduciendo tratamientos innovadores que han transformado la vida de los pacientes, brindando esperanza y sanación donde más se necesitaba.</p>
                    </div>
                    <div className="link-group">
                        <h3>Investigación Médica</h3>
                    </div>
                    <div className="link-group">
                        <h3>Descubrimientos Pioneros</h3>
                        <p>Dedicados al avance de la investigación médica y contribuyendo a la comunidad científica a través de estudios innovadores y hallazgos progresivos.</p>
                    </div>
                    <div className="link-group">
                        <h3>Alcance Comunitario</h3>
                    </div>
                    <div className="link-group">
                        <h3>Iniciativas de Salud</h3>
                        <p>Comprometidos con la comunidad para promover la conciencia sobre la salud, educar sobre el cuidado preventivo y mejorar el bienestar general para todos.</p>
                    </div>

                    <div className="read-more-container">
                        <Link to="/historias-de-exito" className="btn-outline-dark">Leer Más</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
