import * as React from 'react';
import './ContactForm.scss';
import Swal from 'sweetalert2';




const ContactForm = () => {

    const onSubmit = async (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Muchas gracias por contactarnos.',
            text: 'Nos comunicaremos con usted a la brevedad',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor:'#265E6C'
        });

        let form = document.getElementById('form');
        form.reset();
    }

    return (
        <form id='form' className='contactForm' onSubmit={onSubmit}>
            <h2>Contáctenos</h2>
            <div className='contactForm__inputs'>
                <div className='contactForm__inputs-input'>
                    <input name='email' type='email' placeholder='Ingrese su correo' className='contactForm__input' required></input>
                </div>    
                <div className='contactForm__inputs-select'>
                    <select className='contactForm__select'>
                        <option value="default">Seleccione</option>
                        <option value="consulta">Consulta</option>
                        <option value="sugerencia">Sugerencia</option>
                        <option value="queja">Queja</option>
                    </select>
                </div>
                <div className='contactForm__inputs-textarea'>
                <   textarea placeholder='Mensaje' className='contactForm__textarea' required></textarea>
                </div>
            </div>
            <button type='submit' className='contactForm__button'>Enviar</button>
        </form>
    )
}

export default ContactForm