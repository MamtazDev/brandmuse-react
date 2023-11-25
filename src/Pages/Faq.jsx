import React from 'react';
import BreadCrumb from '../Utils/BreadCrumb/BreadCrumb';
import FaqDetail from '../Components/Faq/FaqDetail';

const Faq = () => {
    return (
        <div>
            <BreadCrumb title1="Frequently Ask Question" title="Faq" />
            <FaqDetail/>
        </div>
    );
};

export default Faq;