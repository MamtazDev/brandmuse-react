import React from 'react';
import Header from '../Components/Home3/Shared/Header/Header';
import Footer from '../Components/Home3/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout3 = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout3;