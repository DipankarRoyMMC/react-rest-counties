import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>Welcome to our Rest Countries.</h1>
            <nav>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/services">Services</a>
            </nav>
        </div >
    );
};

export default Header;