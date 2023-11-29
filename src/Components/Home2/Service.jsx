import React from 'react';
import Icon3 from '../../assets/home2/serviceIcon3.png'
import Service1 from '../../assets/home2/serviceIcon1.png'
import Service2 from '../../assets/home2/serviceIcon2.png'
import ServiceGo from '../../assets/home2/serviceGo.png'
import { Link } from 'react-router-dom';


const Service = () => {
    return (
        <div>
            <section class="serviceBg2 mb_120">
                <div class="container">
                    <p class="fs_24 middleheading fc_initial mb_38 text-center">Service</p>
                    <h2 class="fs_48 fc_initial text-center mb-4">
                        We offer the best service to<br />
                        our customer
                    </h2>

                    <div class="row justify-content-center gy-3">
                        <div class="col-md-6 col-lg-4">
                            <div class="seviceContent h-100 text-center text-md-start">
                                <img src={Service1} alt="img"/>
                                    <p class="fs_36 fc_initial mb-2 mt-4">
                                        Web Development
                                    </p>
                                    <p class="fc_other mb-4">
                                        Finding the best Web Development
                                        solution for your business.
                                    </p>
                                    <div class="text-end goIcon">
                                        <Link to="/service"><img class="img-fluid" src={ServiceGo}
                                            alt="img"/></Link>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 ">
                            <div class="seviceContent h-100 text-center text-md-start">
                                <img src={Service2} alt="img"/>
                                    <p class="fs_36 fc_initial mb-2 mt-4">
                                        UI/UX Design
                                    </p>
                                    <p class="fc_other mb-4">
                                        We provide outstanding style with a
                                        minimalist, clean, futuristic design.
                                    </p>
                                    <div class="text-end goIcon">
                                        <Link to="/service"><img class="img-fluid" src={ServiceGo}
                                            alt="img"/></Link>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="seviceContent h-100 text-center text-md-start">
                                <img src={Icon3} alt="img" />
                                <p class="fs_36 fc_initial mb-2 mt-4">
                                    Branding
                                </p>
                                <p class="fc_other mb-4">
                                    We provide outstanding style with a
                                    minimalist, clean, futuristic design.
                                </p>
                                <div class="text-end goIcon">
                                    <Link href="service.html"><img class="img-fluid" src={ServiceGo}
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