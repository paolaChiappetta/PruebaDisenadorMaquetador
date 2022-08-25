import * as React from 'react';
import './New.scss'
const New = ({img, title, content}) => {
    return (
        <div className='new'>
            <img src={img} alt=''></img>
            <h4>{title}</h4>
            <p>{content}</p>
        </div>
    );
}

export default New