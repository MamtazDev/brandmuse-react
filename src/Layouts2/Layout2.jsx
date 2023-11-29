import React from 'react';
import Header from '../Components/Home2/Shared/Header/Header';
import Footer from '../Components/Home2/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout2 = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout2;