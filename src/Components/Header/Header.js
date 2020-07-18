import React from 'react';
import  css from './Header.css'

const Header = () => {
    return (
        <div className="header">
            <nav >
                <a href="/home">Home</a>
                <a href="/count">Review</a>
            </nav>
        </div>
    );
};

export default Header;