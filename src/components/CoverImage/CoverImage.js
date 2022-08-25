import * as React from 'react';
import './CoverImage.scss';

const CoverImage = () => {
    return (
        <section className='coverImage'>
            <h1>Su viaje de 
                <span>salud emocional</span>
                 empieza aqui
            </h1>
            <h4>Conoce nuestros
                <span>profesionales con licencia</span>
            </h4>
            <p>Todos se someten a un proceso seguro de
                verificación y acreditación, además de
                adherirse a estrictos códigos de ética y 
                confidencialidad.
            </p>
        </section>
    );
}

export default CoverImage