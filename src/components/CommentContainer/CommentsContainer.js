import * as React from 'react';
import './CommentContainer.scss';
import Comment from '../Comment/Comment';

const CommentsContainer = () => {
    return (
        <div className='comment_container'>
            <h2>Comentarios de <br/>nuestros clientes</h2>
            <section className='slider'>
                <div className='commentContainer'>
                    <section className='commentContainer__section'>
                        <Comment
                        text='Me gustaría agradecer al sitio, me ayudó de una manera inimaginable, el psicólogo fue sumamente servicial y acogedor conmigo y me siento mejor conmigo mismo.'
                        name='Maria Montessori'/>
                    </section>
                    <section className='commentContainer__section'>
                        <Comment
                        text='Me gustaría agradecer al sitio, me ayudó de una manera inimaginable, el psicólogo fue sumamente servicial y acogedor conmigo y me siento mejor conmigo mismo.'
                        name='Carla Gonzalez'/>
                    </section>
                    <section className='commentContainer__section'>
                        <Comment
                        text='Me gustaría agradecer al sitio, me ayudó de una manera inimaginable, el psicólogo fue sumamente servicial y acogedor conmigo y me siento mejor conmigo mismo.'
                        name='Lorena Perez'/>
                    </section>
                    <section className='commentContainer__section'>
                        <Comment
                        text='Me gustaría agradecer al sitio, me ayudó de una manera inimaginable, el psicólogo fue sumamente servicial y acogedor conmigo y me siento mejor conmigo mismo.'
                        name='Laura Repetto'/>
                    </section>
                </div>
            </section>
        </div>
    );
}

export default CommentsContainer