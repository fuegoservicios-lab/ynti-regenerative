import React from 'react';
import './Services.css';

const Services = () => {
    const serviceList = [
        { name: 'Sesión de Consulta', price: 'Especialista en medicina regenerativa' },
        { name: 'Cocktail Biológico', price: 'Tratamientos celulares avanzados' },
        { name: 'Medicina Estética', price: 'Rejuvenecimiento natural' },
        { name: 'Medicina Deportiva', price: 'Recuperación y alto rendimiento' },
    ];

    return (
        <section id="servicios" className="services section-padding">
            <div className="container">
                <h2 className="section-title">NUESTROS SERVICIOS</h2>
                <div className="services-list">
                    {serviceList.map((service, index) => (
                        <div key={index} className="service-item">
                            <div className="service-info">
                                <h3>{service.name}</h3>
                                <p>{service.price}</p>
                            </div>
                            <button className="btn-book">Reservar Ahora</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
