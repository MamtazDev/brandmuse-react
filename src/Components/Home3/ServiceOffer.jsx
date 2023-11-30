import React from 'react';
import OfferService from '../../assets/home3/offerService.png'
import Misc from '../../assets/home3/misc_01.png'
import { Link } from 'react-router-dom';

const ServiceOffer = () => {
    return (
        <div>
            <section class="mb_130 home3Bg">
                <div class="container">
                    <div class="row gy-3">
                        <div class="col-xl-6">
                            <div class="overflow-hidden">
                                <img class="img-fluid blockImg serviceImg3" src={OfferService}
                                    alt="img" />
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div>
                                <p class="fs_48 fc_initial mb_68">
                                    <span class="fc_primary">We</span> offer the best <span
                                        class="fc_primary">service</span> to
                                    our customer
                                    <span><img class="img-fluid" src={Misc} alt="img" /></span>
                                </p>
                                <div class="row gy-3">
                                    <div class="col-lg-2">
                                        <div class="noAlign">
                                            <p class="serviceNo fc_initial fs_32 ">01</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-9">
                                        <p class="fs_32 fc_initial text-center text-lg-start">Web<br /> Development</p>
                                        <p class="fs_18 fc_initial text-center text-lg-start">
                                            Make the appearance of website pages so that
                                            they look so beautiful and pleasing to the eye.
                                        </p>
                                    </div>
                                    <div class="col-lg-1 my-auto">
                                        <div class="serviceLink">
                                            <Link class="letsGoService" to="/service">
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
                                <hr class="divide" />
                                <div class="row gy-3">
                                    <div class="col-lg-2">
                                        <div class="noAlign">
                                            <p class="serviceNo fc_initial fs_32 ">02</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-9">
                                        <p class="fs_32 fc_initial text-center text-lg-start">UI/UX Design</p>
                                        <p class="fs_18 fc_initial text-center text-lg-start">
                                            Defines the experience that users will have when
                                            interacting with the company, its services, and
                                            its products.
                                        </p>
                                    </div>
                                    <div class="col-lg-1 my-auto">
                                        <div class="serviceLink">
                                            <Link class="letsGoService" to="/service">
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
                                <hr class="divide" />
                                <div class="row gy-3">
                                    <div class="col-lg-2">
                                        <div class="noAlign">
                                            <p class="serviceNo fc_initial fs_32 ">03</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-9">
                                        <p class="fs_32 fc_initial text-center text-lg-start">Graphic Design</p>
                                        <p class="fs_18 fc_initial text-center text-lg-start">
                                            Make the appearance of website pages so that they look
                                            so beautiful and pleasing to the eye.
                                        </p>
                                    </div>
                                    <div class="col-lg-1 my-auto">
                                        <div class="serviceLink">
                                            <Link class="letsGoService" to="/service">
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