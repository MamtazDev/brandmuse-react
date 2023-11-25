import React from 'react';
import BreadCrumb from '../Utils/BreadCrumb/BreadCrumb';
import Address from '../Components/Contact/Address';
import ContactForm from '../Components/Contact/ContactForm';

const Contact = () => {
    return (
        <div>
            <BreadCrumb title="Contact Us" />
            <Address/>
            <ContactForm/>
        </div>
    );
};

export default Contact;