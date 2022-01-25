import React from 'react';
import { SearchContextProvider } from '../context/SearchContext';
import Navbar from './Navbar';

const Layout = ({ children }) => (
    <SearchContextProvider>
        <Navbar />
        <div className="container py-10">{children}</div>
    </SearchContextProvider>
);

export default Layout;
