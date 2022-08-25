import * as React from 'react';
import separator from './Separator.png';
import './Separator.scss';

const Separator = () => {
    return (
        <div className='separator'>
            <img src={separator} alt=''></img>
        </div>
    );
}

export default Separator