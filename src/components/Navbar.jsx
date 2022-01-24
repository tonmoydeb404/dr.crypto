import React from 'react';
import SearchBox from './SearchBox';

const Navbar = ({
    className = '',
    title = 'Dr. Crypto',
    icon = 'https://cdn.coinranking.com/assets/cffd06083b2fa4c3ff87bb7963c85615.svg',
}) => (
    <nav className={`navbar ${className}`}>
        <div className="container">
            <div className="navbar_title">
                <img src={icon} alt={title} className="navbar_title-icon" />
                <h1 className="navbar_title-text">{title}</h1>
            </div>

            <SearchBox />
        </div>
    </nav>
);

export default Navbar;
