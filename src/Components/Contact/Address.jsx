import React from 'react';
import './ContactStyle.css'
import Mainimg from '../../assets/home1/growWith.png' 
import Phone from '../../assets/images/phone.png'
import Email from '../../assets/images/email.png'
import Location from '../../assets/images/location.png'

const Address = () => {
    return (
        <div>
            <section className="growWith all_mb mt_150">
                <div className="container">
                    <div className="row align-items-center gy-5">
                        <div className="col-md-6 pe-md-5">
                            <div className="grothImg text-center">
                                <img className="img-fluid" src={Mainimg} alt="bg"/>
                            </div>
                        </div>
                        <div className="col-md-6 ps-md-5">
                            <div className="text-center text-md-start">
                                <p className="sectionHeader mb-1">Get in
                                    <span className="txt_curve">Touch</span>
                                </p>
                            </div>
                            <div>
                                <div
                                    className="contact_info d-flex flex-lg-row flex-column justify-content-lg-start justify-content-center text-lg-start text-center align-items-center mt-4">
                                    <div className="contact_image">
                                        <img  src={Phone} alt="img"/>
                                    </div>
                                    <div>
                                        <h4>Call Today. It's Free</h4>
                                        <p className="mb-0">+ (123) 456 7890</p>
                                        <p className="mb-0">+ (000) 123 4567</p>
                                    </div>
                                </div>
                                <div
                                    className="contact_info d-flex flex-lg-row flex-column justify-content-lg-start justify-content-center text-lg-start text-center align-items-center  mt-4">
                                    <div className="contact_image">
                                        <img  src={Email} alt="img"/>
                                    </div>
                                    <div>
                                        <h4>Have Any Question?</h4>
                                        <p className="mb-0">support@website.com </p>
                                        <p className="mb-0">sales@website.com</p>
                                    </div>
                                </div>
                                <div
                                    className="contact_info d-flex flex-lg-row flex-column justify-content-lg-start justify-content-center text-lg-start text-center align-items-center  mt-4">
                                    <div className="contact_image">
                                        <img src={Location} alt="img"/>
                                    </div>
                                    <div>
                                        <h4>Address</h4>
                                        <p className="mb-0">Evergreen 27San New York, RA85600 </p>
                                        <p className="mb-0">New Avenue Road 51.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Address;