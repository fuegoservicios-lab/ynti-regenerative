import React from 'react';
import '../index.css';
import './LegalPages.css';

const PrivacyPage = () => {
    return (
        <div className="legal-page section-padding">
            <div className="container">
                <header className="legal-header">
                    <h1 className="section-title">Política de Privacidad</h1>
                    <p className="last-updated">Última actualización: {new Date().toLocaleDateString()}</p>
                </header>

                <div className="legal-content">
                    <section>
                        <h3>1. Introducción</h3>
                        <p>
                            Bienvenido a <strong>Prometheus Regenerative Lab</strong>. La privacidad de sus datos es de suma importancia para nosotros.
                            Esta Política de Privacidad explica cómo recopilamos, usamos, protegemos y divulgamos su información cuando visita nuestro sitio web
                            o utiliza nuestros servicios médicos.
                        </p>
                    </section>

                    <section>
                        <h3>2. Responsable del Tratamiento</h3>
                        <p>
                            El responsable del tratamiento de sus datos es:<br />
                            <strong>Prometheus Regenerative Lab</strong><br />
                            Dirigido por: <strong>Dr. Ynti Eusebio, MD MRM</strong><br />
                            Dirección: C. Toledo 2, San Pedro de Macorís 21000, República Dominicana<br />
                            Email: drynti@yntieusebiomd.com<br />
                            Teléfono: 809-399-3181
                        </p>
                    </section>

                    <section>
                        <h3>3. Información que Recopilamos</h3>
                        <p>Podemos recopilar los siguientes tipos de información:</p>
                        <ul>
                            <li><strong>Información Personal:</strong> Nombre, dirección de correo electrónico, número de teléfono y otros datos de contacto que usted nos proporciones voluntariamente al agendar una cita o suscribirse a nuestro boletín.</li>
                            <li><strong>Información Médica:</strong> Historial médico, síntomas y otros datos de salud necesarios para brindarle una atención adecuada. Estos datos están protegidos por el secreto profesional médico y las leyes de salud de la República Dominicana.</li>
                            <li><strong>Datos de Uso:</strong> Información sobre cómo interactúa con nuestro sitio web (dirección IP, tipo de navegador, páginas visitadas).</li>
                        </ul>
                    </section>

                    <section>
                        <h3>4. Uso de la Información</h3>
                        <p>Utilizamos su información para:</p>
                        <ul>
                            <li>Gestionar sus citas y consultas médicas.</li>
                            <li>Proporcionarle información sobre tratamientos y servicios relevantes para su salud.</li>
                            <li>Mejorar nuestro sitio web y la calidad de nuestros servicios.</li>
                            <li>Cumplir con obligaciones legales y regulatorias.</li>
                        </ul>
                    </section>

                    <section>
                        <h3>5. Protección de Datos</h3>
                        <p>
                            Implementamos medidas de seguridad técnicas y organizativas para proteger su información contra el acceso no autorizado,
                            la alteración, divulgación o destrucción. Solo el personal autorizado (médicos y personal administrativo sujeto a confidencialidad)
                            tiene acceso a sus datos médicos.
                        </p>
                    </section>

                    <section>
                        <h3>6. Sus Derechos</h3>
                        <p>
                            Usted tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales.
                            Para ejercer estos derechos, por favor contáctenos a través de los canales proporcionados en la sección 2.
                        </p>
                    </section>

                    <section>
                        <h3>7. Cambios a esta Política</h3>
                        <p>
                            Nos reservamos el derecho de actualizar esta política en cualquier momento. Cualquier cambio será publicado en esta página.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPage;
