import React from 'react';
import { Link } from 'react-router-dom';
import Misc from '../../assets/home3/misc_01.png';
import OfferService from '../../assets/home3/offerService.png';

const ServiceOffer = () => {
    return (
        <div>
            <section className="mb_130 home3Bg">
                <div className="container">
                    <div className="row gy-3">
                        <div className="col-xl-6">
                            <div className="overflow-hidden">
                                <img className="img-fluid blockImg serviceImg3" src={OfferService}
                                    alt="img" />
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div>
                                <p className="fs_48 fc_initial mb_68">
                                    <span className="fc_primary">We</span> offer the best <span
                                        className="fc_primary">service</span> to
                                    our customer
                                    <span><img className="img-fluid" src={Misc} alt="img" /></span>
                                </p>
                                <div className="row gy-3">
                                    <div className="col-lg-2">
                                        <div className="noAlign">
                                            <p className="serviceNo fc_initial fs_32 ">01</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <p className="fs_32 fc_initial text-center text-lg-start">Web<br /> Development</p>
                                        <p className="fs_18 fc_initial text-center text-lg-start">
                                            Make the appearance of website pages so that
                                            they look so beautiful and pleasing to the eye.
                                        </p>
                                    </div>
                                    <div className="col-lg-1 my-auto">
                                        <div className="serviceLink">
                                            <Link className="letsGoService" to="/service">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="57" height="58"
                                                    viewBox="0 0 57 58" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M41.3628 16.3533L41.3647 32.7713L38.6965 32.7732L38.6965 20.9051L17.4023 42.1994L15.5166 40.3138L36.8109 19.0195L24.9447 19.0214L24.9447 16.3514L41.3628 16.3533Z"
                                                        fill="white" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <hr className="divide" />
                                <div className="row gy-3">
                                    <div className="col-lg-2">
                                        <div className="noAlign">
                                            <p className="serviceNo fc_initial fs_32 ">02</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <p className="fs_32 fc_initial text-center text-lg-start">UI/UX Design</p>
                                        <p className="fs_18 fc_initial text-center text-lg-start">
                                            Defines the experience that users will have when
                                            interacting with the company, its services, and
                                            its products.
                                        </p>
                                    </div>
                                    <div className="col-lg-1 my-auto">
                                        <div className="serviceLink">
                                            <Link className="letsGoService" to="/service">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="57" height="58"
                                                    viewBox="0 0 57 58" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M41.3628 16.3533L41.3647 32.7713L38.6965 32.7732L38.6965 20.9051L17.4023 42.1994L15.5166 40.3138L36.8109 19.0195L24.9447 19.0214L24.9447 16.3514L41.3628 16.3533Z"
                                                        fill="white" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <hr className="divide" />
                                <div className="row gy-3">
                                    <div className="col-lg-2">
                                        <div className="noAlign">
                                            <p className="serviceNo fc_initial fs_32 ">03</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <p className="fs_32 fc_initial text-center text-lg-start">Graphic Design</p>
                                        <p className="fs_18 fc_initial text-center text-lg-start">
                                            Make the appearance of website pages so that they look
                                            so beautiful and pleasing to the eye.
                                        </p>
                                    </div>
                                    <div className="col-lg-1 my-auto">
                                        <div className="serviceLink">
                                            <Link className="letsGoService" to="/service">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="57" height="58"
                                                    viewBox="0 0 57 58" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M41.3628 16.3533L41.3647 32.7713L38.6965 32.7732L38.6965 20.9051L17.4023 42.1994L15.5166 40.3138L36.8109 19.0195L24.9447 19.0214L24.9447 16.3514L41.3628 16.3533Z"
                                                        fill="white" />
                                                </svg>
                                            </Link>
                                        </div>
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

export default ServiceOffer;