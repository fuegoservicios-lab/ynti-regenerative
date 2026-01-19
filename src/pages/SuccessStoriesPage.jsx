import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../components/SuccessStories.css';
import './SuccessStoriesPage.css';

const successStoriesData = [
    {
        id: 1,
        name: "Carlos",
        age: 45,
        title: "Recuperación Metabólica",
        category: "Metabolismo",
        quote: "Gracias al Dr. Eusebio, recuperé mi energía y mi salud metabólica en meses. Me siento 10 años más joven.",
        description: "Este caso destaca la eficacia de un enfoque personalizado en medicina funcional. A través de un análisis detallado y un plan de nutrición y suplementación específico, logramos revertir marcadores inflamatorios crónicos y optimizar su metabolismo basal.",
        image: "/assets/testimonials/carlos.png",
        gradient: "linear-gradient(135deg, #1e293b 0%, #334155 100%)"
    },
    {
        id: 2,
        name: "Elena",
        age: 62,
        title: "Terapia Regenerativa",
        category: "Articulaciones",
        quote: "Volví a caminar sin dolor después de años de sufrimiento. Ahora puedo disfrutar mis caminatas matutinas.",
        description: "Utilizando terapias avanzadas de regeneración celular, tratamos una artrosis severa que limitaba la movilidad. Los resultados mostraron una regeneración de tejido significativa y una mejora drástica en la calidad de vida sin necesidad de cirugía.",
        image: "/assets/testimonials/elena.png",
        gradient: "linear-gradient(135deg, #be123c 0%, #fb7185 100%)"
    },
    {
        id: 3,
        name: "Sofia",
        age: 35,
        title: "Optimización Cognitiva",
        category: "Cognición",
        quote: "Mi claridad mental y enfoque nunca habían estado mejor. Mi productividad en el trabajo se ha disparado.",
        description: "Un enfoque en el eje intestino-cerebro y la salud mitocondrial permitió a este paciente superar la niebla mental y la fatiga crónica, alcanzando un rendimiento cognitivo óptimo para su exigente carrera profesional.",
        image: "/assets/testimonials/sofia.png",
        gradient: "linear-gradient(135deg, #ca8a04 0%, #facc15 100%)"
    },
    {
        id: 4,
        name: "Ana",
        age: 29,
        title: "Control Autoimune",
        category: "Inmunidad",
        quote: "Mi piel brilla de nuevo y mis síntomas han desaparecido. Me siento libre.",
        description: "Mediante un protocolo riguroso de alimentación antiinflamatoria y terapia de exosomas, logramos remitir los brotes de su condición autoinmune, mejorando visiblemente la salud de su piel y su bienestar general.",
        image: "/assets/testimonials/ana.png",
        gradient: "linear-gradient(135deg, #7c3aed 0%, #c4b5fd 100%)"
    },
    {
        id: 5,
        name: "Miguel",
        age: 55,
        title: "Salud Cardiovascular",
        category: "Cardiovascular",
        quote: "Volví a entrenar como cuando tenía 30. Mi resistencia es increíble.",
        description: "Un programa integral de optimización hormonal y salud cardiovascular permitió a Miguel recuperar su vitalidad física, reducir factores de riesgo y retomar su actividad deportiva con intensidad y seguridad.",
        image: "/assets/testimonials/miguel.png",
        gradient: "linear-gradient(135deg, #0f766e 0%, #2dd4bf 100%)"
    },
    {
        id: 6,
        name: "Lucia",
        age: 42,
        title: "Equilibrio Hormonal",
        category: "Hormonas",
        quote: "He recuperado la calma y el sueño reparador. Me siento en paz conmigo misma.",
        description: "Abordamos los desequilibrios hormonales y el estrés oxidativo para restaurar su ciclo de sueño y estabilidad emocional, permitiéndole disfrutar de una vida plena y equilibrada.",
        image: "/assets/testimonials/lucia.png",
        gradient: "linear-gradient(135deg, #be185d 0%, #f472b6 100%)"
    },
    {
        id: 7,
        name: "Roberto",
        age: 68,
        title: "Longevidad Activa",
        category: "Longevidad",
        quote: "Juego ajedrez con mis nietos y les gano. Mi mente está más afilada que nunca.",
        description: "Un protocolo de longevidad enfocado en la neuroprotección y la salud celular ha permitido a Roberto mantener una agilidad mental excepcional y una independencia física envidiable.",
        image: "/assets/testimonials/roberto.png",
        gradient: "linear-gradient(135deg, #15803d 0%, #4ade80 100%)"
    }
];

const SuccessStoriesPage = () => {
    return (
        <div className="success-page">
            <header className="page-hero">
                <div className="hero-content container">
                    <span className="hero-badge">Testimonios Reales</span>
                    <h1 className="hero-title">Historias de <span className="text-gradient">Transformación</span></h1>
                    <p className="hero-subtitle">
                        Descubra cómo la medicina regenerativa y funcional ha cambiado la vida de nuestros pacientes,
                        devolviéndoles la vitalidad y el bienestar.
                    </p>
                </div>
                <div className="hero-background-shape"></div>
            </header>

            <main className="container section-padding">
                <div className="story-grid">
                    {successStoriesData.map((story) => (
                        <article key={story.id} className="story-card">
                            <div className="card-header-visual" style={{ background: story.gradient }}>
                                {story.image ? (
                                    <img src={story.image} alt={`${story.name} - Paciente`} className="patient-img" />
                                ) : (
                                    <div className="patient-initials">
                                        {story.name.charAt(0)}
                                    </div>
                                )}
                                <span className="story-category">{story.category}</span>
                            </div>

                            <div className="card-body">
                                <div className="patient-meta">
                                    <h3 className="story-title">{story.title}</h3>
                                    <div className="patient-details">
                                        <span className="patient-name">{story.name}</span>
                                        <span className="separator">•</span>
                                        <span className="patient-age">{story.age} años</span>
                                    </div>
                                </div>

                                <blockquote className="story-quote">
                                    "{story.quote}"
                                </blockquote>

                                <p className="story-description">
                                    {story.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default SuccessStoriesPage;
