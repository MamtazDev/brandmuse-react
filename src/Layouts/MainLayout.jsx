import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Home1/Shared/Footer/Footer';
import Header from '../Components/Home1/Shared/Header/Header';

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;