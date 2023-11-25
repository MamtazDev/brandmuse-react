import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import Error from '../Components/Home1/Shared/Error';
import Header from '../Components/Home1/Shared/Header/Header';
import Footer from '../Components/Home1/Shared/Footer/Footer';


const NotFound = () => {
    const is404Page = location.pathname === '/404';
    return (
        <div>
            {is404Page ? '' : <Header />}

            <Error />

            {is404Page ? '' : <Footer />}

        </div>
    );
};

export default NotFound;