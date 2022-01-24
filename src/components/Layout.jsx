import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => (
    <>
        <Navbar />
        <div className="container mt-10">{children}</div>
    </>
);

export default Layout;
