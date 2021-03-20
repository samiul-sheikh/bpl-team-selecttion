import React from 'react';
import logo from '../../images/bpl-logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <h1 className="title">Bangladesh Premier League-BPL</h1>
        </div>
    );
};

export default Header;