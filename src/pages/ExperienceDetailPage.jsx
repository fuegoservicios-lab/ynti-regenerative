import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { experienceData } from '../data/experienceData';
import './ExperienceDetailPage.css';

const ExperienceDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const item = experienceData.find(d => d.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!item) {
        return (
            <div className="not-found-container">
                <h2>Servicio no encontrado</h2>
                <button onClick={() => navigate('/')} className="btn-back">
                    <ArrowLeft size={20} />
                    Volver al Inicio
                </button>
            </div>
        );
    }

    return (
        <div className="experience-detail-page">
            <div className="detail-hero" style={{ backgroundImage: `url(${item.image})` }}>
                <div className="detail-hero-overlay"></div>
                <div className="container detail-hero-content">
                    <Link to="/" className="back-link">
                        <ArrowLeft size={20} />
                        Volver
                    </Link>
                    <span className="detail-category" style={{ color: item.accent }}>{item.category}</span>
                    <h1 className="detail-title">{item.details.title}</h1>
                </div>
            </div>

            <div className="container detail-content-wrapper">
                <div className="detail-main">
                    <p className="detail-intro">{item.details.intro}</p>

                    <div className="detail-body">
                        {item.details.content.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                    <div className="detail-benefits">
                        <h3>Beneficios Clave</h3>
                        <div className="benefits-grid">
                            {item.details.benefits.map((benefit, index) => (
                                <div key={index} className="benefit-item">
                                    <CheckCircle size={20} color={item.accent} />
                                    <span>{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="detail-cta">
                        <h3>¿Listo para transformar su salud?</h3>
                        <a href="https://api.whatsapp.com/send/?phone=18093993181&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="btn-book-detail">
                            Agendar Consulta
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceDetailPage;
