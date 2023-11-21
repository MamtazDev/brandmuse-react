import React from 'react';
import './BestService.css';
import Profile1 from '../../../../assets/home1/profile1.png';
import Profile2 from '../../../../assets/home1/profile2.png';
import Profile3 from '../../../../assets/home1/profile3.png';
import Profile4 from '../../../../assets/home1/profile4.png';
import PlayBtn from '../../../../assets/home1/playBtn.png';
import PlayBtn2 from '../../../../assets/home1/playBtnMobile.png';
import VideoImg from '../../../../assets/home1/videoImg.png';

const BestService = () => {
    return (
        <div>
            <section className="all_mb">
                <div className="container">
                    <div className="row inner_mb gy-3">
                        <div className="col-md-6">
                            <h2 className="sectionHeader text-center text-md-start">
                                Provide the <span className="txt_curve bestTxt">best service</span> with
                                out of the box <span className="headerHilight">ideas</span>
                            </h2>
                        </div>
                        <div className="col-md-6">
                            <p className="commonPara text-center text-md-start">
                                we are a passionate team of digital marketing enthusiasts
                                dedicated to helping businesses succeed in the digital world.
                                With years of experience and a deep understanding of the
                                ever-evolving online landscape, we stay at the fore front of
                                industry trends and technologies.
                            </p>
                        </div>
                    </div>

                    <div className="row gy-3">
                        <div className="col-lg-4">
                            <div className="bestServiceImg h-100">
                                <div className="card_mb">
                                    <h2 className="sectionHeader initialColor txtOpacity">920 <span
                                        className="headerHilightSec">+</span></h2>
                                    <p className="commonPara initialColor">Project finish with superbly</p>
                                </div>
                                <div className="d-flex justify-content-start gap-1 align-items-center">
                                    <div className="d-flex profileImg align-items-center">
                                        <img className="img-fluid" src={Profile1} alt="img" />
                                        <img className="img-fluid" src={Profile2} alt="img" />
                                        <img className="img-fluid" src={Profile3} alt="img" />
                                        <img className="img-fluid" src={Profile4} alt="img" />
                                    </div>
                                    <button className="sectionHeader initialColor txtOpacity ">+</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="videoInner d-inline-block text-center w-100 h-100">
                                <img className="img-fluid h-100 object-fit-cover" src={VideoImg} alt="img" />
                                <p className="sectionHeader text-white text-center txtOpacity bg-red txtPosition">How We Work
                                </p>

                                <button type="button" className="playBtn" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal1">
                                    <img className="d-none d-md-block img-fluid" src={PlayBtn} alt="img" />
                                    <img className="d-block d-md-none img-fluid" src={PlayBtn2}
                                        alt="img" />
                                </button>

                                {/* <!-- Video Modal Start --> */}
                                <div className="modal fade modalIndex" id="exampleModal1"
                                    aria-labelledby="exampleModal1" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered modal-xl">
                                        <div className="modal-content">
                                            <div className="modal-body p-0">
                                                <div className="position-relative ratio videoRatio">
                                                    <button type="button"
                                                        className="mBtn position-absolute btn-close-white btn-close"
                                                        data-bs-dismiss="modal" aria-label="Close"></button>
                                                    <iframe
                                                        src="https://www.youtube.com/embed/mms2tTXLWZk?si=7DRlGqzKz6z-5pJl"
                                                        title="YouTube video" allowfullscreen></iframe>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Video Modal End --> */}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BestService;