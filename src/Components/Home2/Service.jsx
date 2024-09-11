import React from 'react';
import { Link } from 'react-router-dom';
import ServiceGo from '../../assets/home2/serviceGo.png';
import Service1 from '../../assets/home2/serviceIcon1.png';
import Service2 from '../../assets/home2/serviceIcon2.png';
import Icon3 from '../../assets/home2/serviceIcon3.png';


const Service = () => {
    return (
        <div>
            <section className="serviceBg2 mb_120">
                <div className="container">
                    <p className="fs_24 middleheading fc_initial mb_38 text-center">Service</p>
                    <h2 className="fs_48 fc_initial text-center mb-4">
                        We offer the best service to<br />
                        our customer
                    </h2>

                    <div className="row justify-content-center gy-3">
                        <div className="col-md-6 col-lg-4">
                            <div className="seviceContent h-100 text-center text-md-start">
                                <img src={Service1} alt="img"/>
                                    <p className="fs_36 fc_initial mb-2 mt-4">
                                        Web Development
                                    </p>
                                    <p className="fc_other mb-4">
                                        Finding the best Web Development
                                        solution for your business.
                                    </p>
                                    <div className="text-end goIcon">
                                        <Link to="/service"><img className="img-fluid" src={ServiceGo}
                                            alt="img"/></Link>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 ">
                            <div className="seviceContent h-100 text-center text-md-start">
                                <img src={Service2} alt="img"/>
                                    <p className="fs_36 fc_initial mb-2 mt-4">
                                        UI/UX Design
                                    </p>
                                    <p className="fc_other mb-4">
                                        We provide outstanding style with a
                                        minimalist, clean, futuristic design.
                                    </p>
                                    <div className="text-end goIcon">
                                        <Link to="/service"><img className="img-fluid" src={ServiceGo}
                                            alt="img"/></Link>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="seviceContent h-100 text-center text-md-start">
                                <img src={Icon3} alt="img" />
                                <p className="fs_36 fc_initial mb-2 mt-4">
                                    Branding
                                </p>
                                <p className="fc_other mb-4">
                                    We provide outstanding style with a
                                    minimalist, clean, futuristic design.
                                </p>
                                <div className="text-end goIcon">
                                    <Link href="service.html"><img className="img-fluid" src={ServiceGo}
                                        alt="img"/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Service;