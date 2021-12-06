import React from 'react';
import back from '../assets/back.png';
import { Link } from 'react-router-dom';

const Back = () => {
    return (
        <Link to='/'>
            <div className='back-btn'>
                <img src={back} alt='back' />
            </div>
        </Link>
    );
};

export default Back;
