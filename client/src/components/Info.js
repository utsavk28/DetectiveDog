import React from 'react';
import info from '../assets/info.png';
import { Link } from 'react-router-dom';

const Info = () => {
    return (
        <Link to='/info'>
            <div className='info-btn'>
                <img src={info} alt='info' />
            </div>
        </Link>
    );
};

export default Info;
