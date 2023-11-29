import React from 'react';
import Bannerimg from '../../assets/home2/banner.png'
import Trust from '../../assets/home2/trustPilot.png'
import Star from '../../assets/home2/star.png'

const Banner = () => {
    return (
        <div>
            <section class="bannerBg mb_120">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <h2 class="fs_68 fc_initial text-center text-lg-start proDesign mb-2 mb-lg-1 mt-5 mt-lg-0">
                                Develop Your Upcoming <span>Project</span> With Us
                            </h2>
                            <p class="fs_20 fc_other2 mb-2 text-center text-lg-start">
                                Foster effective concepts in the proper way following forward
                                alignments. Monotonectally.
                            </p>
                            <div class="text-center text-lg-start">
                                <a href="#" class="letsTalkBtn mb_81 ">
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
                            <div class="d-none d-lg-block">
                                <div class="d-flex justify-content-start align-items-center gap-4 mb-2">
                                    <img class="img-fluid" src={Trust} alt="img" />
                                    <div class="d-flex justify-content-start align-items-center gap-3">
                                        <img class="img-fluid" src={Star} alt="img" />
                                        <img class="img-fluid" src={Star} alt="img" />
                                        <img class="img-fluid" src={Star} alt="img" />
                                        <img class="img-fluid" src={Star} alt="img" />
                                        <img class="img-fluid" src={Star} alt="img" />
                                        <img class="img-fluid" src={Star} alt="img" />
                                    </div>
                                </div>
                                <p class="fs_20 fc_other2 ">
                                    49000 reviews with 5.0 Stars
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div>
                                <img class="img-fluid" src={Bannerimg} alt="img" />
                                <div class="d-block d-lg-none">
                                    <div class="d-flex justify-content-center align-items-center gap-4 mb-2">
                                        <img class="img-fluid trustPilotImg" src={Trust} alt="img" />
                                        <div class="allstar d-flex justify-content-center align-items-center gap-1 mb-1">
                                            <img class="img-fluid" src={Star} alt="img" />
                                            <img class="img-fluid" src={Star} alt="img" />
                                            <img class="img-fluid" src={Star} alt="img" />
                                            <img class="img-fluid" src={Star} alt="img" />
                                            <img class="img-fluid" src={Star} alt="img" />
                                            <img class="img-fluid" src={Star} alt="img" />
                                        </div>
                                    </div>
                                    <p class="fs_20 fc_other2 text-center">
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