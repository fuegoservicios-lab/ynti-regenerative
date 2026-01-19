import { User, Users, Microscope, Dna, Syringe, Activity, Sparkles } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="inicio" className="hero-section">
            {/* Animated Background Elements */}
            <div className="hero-bg-elements">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="grid-pattern"></div>
            </div>

            <div className="container">
                <div className="hero-grid">
                    <div className="hero-content">


                        <h1 className="hero-headline">
                            <span className="headline-small">El Envejecimiento</span>
                            <span className="headline-main">
                                Termina <span className="text-gradient">Aquí.</span>
                            </span>
                        </h1>

                        <p className="hero-description">
                            El <strong>Dr. Ynti Eusebio</strong> fusiona la medicina regenerativa con tecnología de vanguardia para devolverte no solo la salud, sino tu <em>vitalidad plena</em>.
                        </p>

                        <div className="hero-cta-wrapper">
                            <a href="https://api.whatsapp.com/send/?phone=18093993181&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="btn-primary-hero">
                                <span>Reservar Consulta</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </a>
                            <div className="trust-indicator">
                                <div className="trust-avatars">
                                    <div className="avatar">
                                        <User size={20} color="white" />
                                    </div>
                                    <div className="avatar">
                                        <Users size={20} color="white" />
                                    </div>
                                    <div className="avatar">
                                        <Activity size={20} color="white" />
                                    </div>
                                </div>
                                <div className="trust-text">
                                    <span className="trust-number">+500</span>
                                    <span className="trust-label">Pacientes Transformados</span>
                                </div>
                            </div>
                        </div>

                        <div className="hero-tech-stack">
                            <div className="tech-item">
                                <div className="tech-icon">
                                    <Dna size={18} className="text-blue-400" />
                                </div>
                                <span>Células Madre</span>
                            </div>
                            <div className="tech-item">
                                <div className="tech-icon">
                                    <Microscope size={18} className="text-purple-400" />
                                </div>
                                <span>Terapia Génica</span>
                            </div>
                            <div className="tech-item">
                                <div className="tech-icon">
                                    <Syringe size={18} className="text-teal-400" />
                                </div>
                                <span>Exosomas</span>
                            </div>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="visual-frame">
                            <div className="frame-glow"></div>
                            <img src="/doctor-ynti.png" alt="Dr. Ynti Eusebio - Especialista en Medicina Regenerativa" className="doctor-image" />

                            <div className="floating-stat stat-1">
                                <div className="stat-icon">🏆</div>
                                <div className="stat-content">
                                    <span className="stat-value">10+</span>
                                    <span className="stat-label">Años de Exp.</span>
                                </div>
                            </div>

                            <div className="floating-stat stat-2">
                                <div className="stat-icon">
                                    <Sparkles size={24} className="text-yellow-400" fill="#facc15" />
                                </div>
                                <div className="stat-content">
                                    <span className="stat-value">100%</span>
                                    <span className="stat-label">Personalizado</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
