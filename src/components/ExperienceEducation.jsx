import React from 'react';
import { Link } from 'react-router-dom';
import { experienceData } from '../data/experienceData';
import './ExperienceEducation.css';

const ExperienceEducation = () => {
    return (
        <section id="experiencia" className="experience-section section-padding">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">EXPERIENCIA Y EDUCACIÓN</h2>
                    <p className="section-subtitle">Liderazgo científico al servicio de su salud</p>
                </div>

                <div className="experience-list">
                    {experienceData.map((item, index) => (
                        <div key={item.id} className={`experience-row ${index % 2 !== 0 ? 'reverse' : ''}`}>
                            <div className="experience-image-col">
                                <div className="img-container">
                                    <div className="img-wrapper" style={{
                                        backgroundImage: `url(${item.image})`
                                    }}></div>
                                </div>
                            </div>
                            <div className="experience-content-col">
                                <div className="content-wrapper">
                                    <span className="exp-category" style={{ color: item.accent }}>{item.category}</span>
                                    <h3 className="exp-title">{item.title}</h3>
                                    <p className="exp-desc">{item.description}</p>
                                    <Link to={`/experiencia/${item.id}`} className="exp-btn">
                                        Conocer más
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceEducation;
