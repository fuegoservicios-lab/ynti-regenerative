import React from 'react';
import './Skills.css';

const Skills = () => {
    const skills = [
        "CUIDADO COMPASIVO",
        "SANACIÓN HOLÍSTICA",
        "PRÁCTICA BASADA EN EVIDENCIA",
        "ENFOQUE CENTRADO EN EL PACIENTE"
    ];

    return (
        <section className="skills-section section-padding">
            <div className="container">
                <h2 className="skills-title">HABILIDADES</h2>
                <p className="skills-subtitle">Atributos Profesionales</p>
                <div className="skills-divider"></div>

                <div className="skills-list">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <div className="skill-line"></div>
                            <h3 className="skill-name">{skill}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
