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
            <section class="all_mb">
                <div class="heroBg">
                    <div class="container">
                        <div class="row align-items-center gy-2">
                            <div class="col-md-7">
                                <h1 class="text-light">
                                    Empower Your Brand
                                    with Our
                                    <span>Creativity
                                        <img class="img-fluid" src={Highlight} alt="highlight"/>
                                    </span>
                                </h1>
                            </div>
                            <div class="col-md-5">
                                <p>
                                    An award-winning creative agency with disciplines in digital
                                    marketing, design, and website development, focused on
                                    understanding you.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="text-center banner">
                        <div class="circlePosition">
                            <div class="d-none d-md-block">
                                <img class="bounnceArrow img-fluid " src={Arrow} alt="img" />
                            </div>
                            <div class="d-block d-md-none">
                                <img class="bounnceArrow img-fluid" src={ArrowSmall}
                                    alt="img" />
                            </div>

                            <div class="circleTxt">
                                <div class="d-none d-md-block">
                                    <img class="img-fluid" src={TalkCircle} alt="circle" />
                                </div>
                                <div class="d-block d-md-none">
                                    <img class=" img-fluid" src={TalkCircleSmall} alt="img" />
                                </div>

                            </div>
                        </div>
                        <img class="img-fluid" src={BannerImg} alt="Banner" />
                    </div>
                </div>
            </section>
            {/* <!-- Hero End --> */}
        </div>
    );
};

export default Banner;