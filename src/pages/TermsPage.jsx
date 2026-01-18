import React from 'react';
import '../index.css';
import './LegalPages.css';

const TermsPage = () => {
    return (
        <div className="legal-page section-padding">
            <div className="container">
                <header className="legal-header">
                    <h1 className="section-title">Términos de Servicio</h1>
                    <p className="last-updated">Última actualización: {new Date().toLocaleDateString()}</p>
                </header>

                <div className="legal-content">
                    <section>
                        <h3>1. Aceptación de los Términos</h3>
                        <p>
                            Al acceder y utilizar el sitio web de <strong>Prometheus Regenerative Lab</strong> y los servicios del <strong>Dr. Ynti Eusebio</strong>,
                            usted acepta cumplir con los siguientes Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos,
                            le rogamos no utilizar nuestros servicios.
                        </p>
                    </section>

                    <section>
                        <h3>2. Uso Informativo</h3>
                        <p>
                            El contenido de este sitio web (textos, gráficos, imágenes e información) tiene fines exclusivamente informativos y educativos.
                            <strong>No sustituye el consejo, diagnóstico o tratamiento médico profesional.</strong> Siempre busque la opinión de su médico
                            u otro proveedor de salud calificado ante cualquier duda sobre una condición médica.
                        </p>
                    </section>

                    <section>
                        <h3>3. Servicios Médicos</h3>
                        <p>
                            Los tratamientos de medicina regenerativa, antienvejecimiento y otros servicios ofrecidos están sujetos a una evaluación médica previa.
                            Los resultados pueden variar de un paciente a otro y no se garantizan resultados específicos, ya que dependen de la biología individual de cada persona.
                        </p>
                    </section>

                    <section>
                        <h3>4. Citas y Cancelaciones</h3>
                        <p>
                            Para agendar una consulta, se puede requerir información personal. Solicitamos notificar cualquier cancelación con al menos 24 horas de antelación.
                            Nos reservamos el derecho de cobrar una tarifa por citas canceladas sin el debido aviso o por inasistencia.
                        </p>
                    </section>

                    <section>
                        <h3>5. Propiedad Intelectual</h3>
                        <p>
                            Todo el contenido de este sitio web es propiedad de Prometheus Regenerative Lab o del Dr. Ynti Eusebio y está protegido por las leyes
                            de propiedad intelectual de la República Dominicana e internacionales. Está prohibida su reproducción sin autorización expresa.
                        </p>
                    </section>

                    <section>
                        <h3>6. Limitación de Responsabilidad</h3>
                        <p>
                            Prometheus Regenerative Lab no se hace responsable de daños directos, indirectos o consecuentes derivados del uso o la imposibilidad
                            de uso de este sitio web, ni de errores u omisiones en su contenido.
                        </p>
                    </section>

                    <section>
                        <h3>7. Ley Aplicable</h3>
                        <p>
                            Estos términos se rigen e interpretan de acuerdo con las leyes de la <strong>República Dominicana</strong>.
                            Cualquier disputa que surja en relación con estos términos estará sujeta a la jurisdicción exclusiva de los tribunales de San Pedro de Macorís.
                        </p>
                    </section>

                    <section>
                        <h3>8. Contacto</h3>
                        <p>
                            Si tiene preguntas sobre estos Términos, contáctenos en:<br />
                            <strong>Prometheus Regenerative Lab</strong><br />
                            C. Toledo 2, San Pedro de Macorís 21000<br />
                            Email: drynti@yntieusebiomd.com
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsPage;
