import React from 'react';
import logo from '../assets/Logo.png'

const Navbar = () => {
    return (
        <nav>
            <div className='d-flex justify-content-around mx-4 mb-4'>
                <div className='logo' >
                <img src={logo} alt="" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
