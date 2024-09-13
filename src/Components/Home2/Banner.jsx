import React from 'react';
import Bannerimg from '../../assets/home2/banner.png';
import Star from '../../assets/home2/star.png';
import Trust from '../../assets/home2/trustPilot.png';

const Banner = () => {
    return (
        <div>
            <section className="bannerBg mb_120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h2 className="fs_68 fc_initial text-center text-lg-start proDesign mb-2 mb-lg-1 mt-5 mt-lg-0">
                                Develop Your Upcoming <span>Project</span> With Us
                            </h2>
                            <p className="fs_20 fc_other2 mb-2 text-center text-lg-start">
                                Foster effective concepts in the proper way following forward
                                alignments. Monotonectally.
                            </p>
                            <div className="text-center text-lg-start">
                                <a href="/contact-us" className="letsTalkBtn mb_81 ">
                                    Let’s Talk
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24"
                                            fill="none">
                                            <path d="M17 4.5L23 12M23 12L17 19.5M23 12L2 12" stroke="#393939"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                            <div className="d-none d-lg-block">
                                <div className="d-flex justify-content-start align-items-center gap-4 mb-2">
                                    <img className="img-fluid" src={Trust} alt="img" />
                                    <div className="d-flex justify-content-start align-items-center gap-3">
                                        <img className="img-fluid" src={Star} alt="img" />
                                        <img className="img-fluid" src={Star} alt="img" />
                                        <img className="img-fluid" src={Star} alt="img" />
                                        <img className="img-fluid" src={Star} alt="img" />
                                        <img className="img-fluid" src={Star} alt="img" />
                                        <img className="img-fluid" src={Star} alt="img" />
                                    </div>
                                </div>
                                <p className="fs_20 fc_other2 ">
                                    49000 reviews with 5.0 Stars
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div>
                                <img className="img-fluid" src={Bannerimg} alt="img" />
                                <div className="d-block d-lg-none">
                                    <div className="d-flex justify-content-center align-items-center gap-4 mb-2">
                                        <img className="img-fluid trustPilotImg" src={Trust} alt="img" />
                                        <div className="allstar d-flex justify-content-center align-items-center gap-1 mb-1">
                                            <img className="img-fluid" src={Star} alt="img" />
                                            <img className="img-fluid" src={Star} alt="img" />
                                            <img className="img-fluid" src={Star} alt="img" />
                                            <img className="img-fluid" src={Star} alt="img" />
                                            <img className="img-fluid" src={Star} alt="img" />
                                            <img className="img-fluid" src={Star} alt="img" />
                                        </div>
                                    </div>
                                    <p className="fs_20 fc_other2 text-center">
                                        49000 reviews with 5.0 Stars
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;