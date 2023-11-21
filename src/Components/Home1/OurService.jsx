import React from 'react';
import ServiceImg from '../../assets/home1/serviceImg.png';
import ArrowIcon from '../../assets/home1/icon_arrow.png';
import HowWork from '../../assets/home1/howWork.png';
import MeetExpert from '../../assets/home1/meetExpert.png';
import { Link } from 'react-router-dom';

const OurService = () => {
    return (
        <div>
            <section className="all_mb">
                <div className="container">
                    <h2 className="sectionHeader mb-3">Our <span className="txt_curve">Services</span></h2>
                    <div className="row justify-content-center gy-3">
                        <div className="col-md-6 col-xl-5">
                            <div className="h-100">
                                <p className="commonPara inner_mb">
                                    Brandmuse offers a range of design services that
                                    are tailored to meet the unique needs of each client
                                </p>
                                <div className="d-flex flex-column customGap">
                                    <Link to="service"
                                        className="allService d-flex justify-content-between align-items-center">
                                        <div>
                                            <span className="me-3">01</span>
                                            UI/UX Design
                                        </div>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                                                viewBox="0 0 40 40" fill="none">
                                                <g clip-path="url(#clip0_326_1543)">
                                                    <path
                                                        d="M26.6667 8.33337C26.6667 9.57004 27.8883 11.4167 29.125 12.9667C30.715 14.9667 32.615 16.7117 34.7933 18.0434C36.4267 19.0417 38.4067 20 40 20M40 20C38.4067 20 36.425 20.9584 34.7933 21.9567C32.615 23.29 30.715 25.035 29.125 27.0317C27.8883 28.5834 26.6667 30.4334 26.6667 31.6667M40 20L4.37037e-07 20"
                                                        stroke="#6A6A6A" stroke-width="2" />
                                                </g>
                                                <defs>
                                                    <clipPath>
                                                        <rect width="40" height="40" fill="white"
                                                            transform="translate(40) rotate(90)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                    </Link>
                                    <Link to="/service"
                                        className="allService d-flex justify-content-between align-items-center">
                                        <div>
                                            <span className="me-3">02</span>
                                            Web Development
                                        </div>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                                                viewBox="0 0 40 40" fill="none">
                                                <g clip-path="url(#clip0_326_1543)">
                                                    <path
                                                        d="M26.6667 8.33337C26.6667 9.57004 27.8883 11.4167 29.125 12.9667C30.715 14.9667 32.615 16.7117 34.7933 18.0434C36.4267 19.0417 38.4067 20 40 20M40 20C38.4067 20 36.425 20.9584 34.7933 21.9567C32.615 23.29 30.715 25.035 29.125 27.0317C27.8883 28.5834 26.6667 30.4334 26.6667 31.6667M40 20L4.37037e-07 20"
                                                        stroke="#6A6A6A" stroke-width="2" />
                                                </g>
                                                <defs>
                                                    <clipPath>
                                                        <rect width="40" height="40" fill="white"
                                                            transform="translate(40) rotate(90)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                    </Link>
                                    <Link to="service"
                                        className="allService d-flex justify-content-between align-items-center">
                                        <div>
                                            <span className="me-3">03</span>
                                            3D Designs
                                        </div>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                                                viewBox="0 0 40 40" fill="none">
                                                <g clip-path="url(#clip0_326_1543)">
                                                    <path
                                                        d="M26.6667 8.33337C26.6667 9.57004 27.8883 11.4167 29.125 12.9667C30.715 14.9667 32.615 16.7117 34.7933 18.0434C36.4267 19.0417 38.4067 20 40 20M40 20C38.4067 20 36.425 20.9584 34.7933 21.9567C32.615 23.29 30.715 25.035 29.125 27.0317C27.8883 28.5834 26.6667 30.4334 26.6667 31.6667M40 20L4.37037e-07 20"
                                                        stroke="#6A6A6A" stroke-width="2" />
                                                </g>
                                                <defs>
                                                    <clipPath>
                                                        <rect width="40" height="40" fill="white"
                                                            transform="translate(40) rotate(90)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                    </Link>
                                    <Link to="service"
                                        className="allService d-flex justify-content-between align-items-center">
                                        <div>
                                            <span className="me-3">04</span>
                                            Motion Graphics
                                        </div>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                                                viewBox="0 0 40 40" fill="none">
                                                <g clip-path="url(#clip0_326_1543)">
                                                    <path
                                                        d="M26.6667 8.33337C26.6667 9.57004 27.8883 11.4167 29.125 12.9667C30.715 14.9667 32.615 16.7117 34.7933 18.0434C36.4267 19.0417 38.4067 20 40 20M40 20C38.4067 20 36.425 20.9584 34.7933 21.9567C32.615 23.29 30.715 25.035 29.125 27.0317C27.8883 28.5834 26.6667 30.4334 26.6667 31.6667M40 20L4.37037e-07 20"
                                                        stroke="#6A6A6A" stroke-width="2" />
                                                </g>
                                                <defs>
                                                    <clipPath>
                                                        <rect width="40" height="40" fill="white"
                                                            transform="translate(40) rotate(90)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                    </Link>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                            <div className="serviceImg">
                                <img className="img-fluid h-100" src={ServiceImg} alt="img" />
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="h-100">
                                <div className="serviceBg howWorkBg mb-3">
                                    <p className="commonPara text-white">
                                        Ever wondered how
                                        design magic happens?
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="serviceTxt">See how<br /> we work</p>
                                        <div className="arrowPosition">
                                            <a href="service.html">
                                                <img className="img-fluid goArrow" src={ArrowIcon}
                                                    alt="img" />
                                                <img className="img-fluid" src={HowWork} alt="img" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="serviceBg meetExpertBg">
                                    <p className="commonPara text-white mb-4">
                                        Looking for design
                                        experts who can bring
                                        your vision to life?
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="serviceTxt headerHilightSec">Meet Our <br />Expert
                                        </p>
                                        <div className="arrowPosition">
                                            <Link to="/service">
                                                <img className="img-fluid goArrow" src={ArrowIcon}
                                                    alt="img" />
                                                <img className="img-fluid" src={MeetExpert} alt="img" />
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

export default OurService;