import React from 'react';
import Highlight from '../../assets/home1/highlight.png';
import Arrow from '../../assets/home1/guidance_up-arrow.png';
import ArrowSmall from '../../assets/home1/guidance_up-arrowSmall.png';
import TalkCircle from '../../assets/home1/talkCircle.png';
import TalkCircleSmall from '../../assets/home1/talkCircleSmall.png';
import BannerImg from '../../assets/home1/banner1.png';

const Banner = () => {
    return (
        <div>
            {/* <!-- Hero Start --> */}
            <section className="all_mb">
                <div className="heroBg">
                    <div className="container">
                        <div className="row align-items-center gy-2">
                            <div className="col-md-7">
                                <h1 className="text-light">
                                    Empower Your Brand
                                    with Our
                                    <span>Creativity
                                        <img className="img-fluid" src={Highlight} alt="highlight"/>
                                    </span>
                                </h1>
                            </div>
                            <div className="col-md-5">
                                <p>
                                    An award-winning creative agency with disciplines in digital
                                    marketing, design, and website development, focused on
                                    understanding you.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="text-center banner">
                        <div className="circlePosition">
                            <div className="d-none d-md-block">
                                <img className="bounnceArrow img-fluid " src={Arrow} alt="img" />
                            </div>
                            <div className="d-block d-md-none">
                                <img className="bounnceArrow img-fluid" src={ArrowSmall}
                                    alt="img" />
                            </div>

                            <div className="circleTxt">
                                <div className="d-none d-md-block">
                                    <img className="img-fluid" src={TalkCircle} alt="circle" />
                                </div>
                                <div className="d-block d-md-none">
                                    <img className=" img-fluid" src={TalkCircleSmall} alt="img" />
                                </div>

                            </div>
                        </div>
                        <img className="img-fluid" src={BannerImg} alt="Banner" />
                    </div>
                </div>
            </section>
            {/* <!-- Hero End --> */}
        </div>
    );
};

export default Banner;