import * as React from 'react';
import './Comment.scss';
import vector from './Vector.png'

const Comment = ({text, name}) => {
    return (
        <div className='comment'>
            <div className='comment__box'>
                <img src={vector} alt='' className='moveVector'></img>
                <p className='comment__text'>{text}</p>
                <p className='comment__name'>{name}</p>
            </div>
        </div>
    );
}

export default Comment