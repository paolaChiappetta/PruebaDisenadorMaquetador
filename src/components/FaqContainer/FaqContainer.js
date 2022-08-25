import * as React from 'react';
import './FaqContainer.scss';
import Faq from '../Faq/Faq';

const FaqContainer = () => {
    return (
        <section className='faq_container'>
            <h2>Preguntas Frecuentes</h2>
            <div className='faq_container__questions'>
                <Faq
                question='¿Cuáles son los pasos para tomar una decisión?'
                answer='Los pasos para tomar una decisión son...'
                />
                <Faq
                question='¿Cuáles son los pasos para tomar una decisión?'
                answer='Los pasos para tomar una decisión son...'
                />
                <Faq
                question='¿Cuáles son los pasos para tomar una decisión?'
                answer='Los pasos para tomar una decisión son...'
                />
                <Faq
                question='¿Cuáles son los pasos para tomar una decisión?'
                answer='Los pasos para tomar una decisión son...'
                />
            </div>
        </section>
    );
}

export default FaqContainer