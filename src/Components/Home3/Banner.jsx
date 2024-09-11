import React from 'react';
import Banner1 from '../../assets/home3/banner1.png';
import Contentimg from '../../assets/home3/contentImg.png';
import ArrowB from '../../assets/home3/guidance_up-arrow.png';
import ArrowS from '../../assets/home3/guidance_up-arrowSmall.png';
import Talk from '../../assets/home3/talkCircle.png';
import TalkS from '../../assets/home3/talkCircleSmall.png';

const Banner = () => {
    return (
        <div>
            <section className="mb_130 home3 home3Bg">
                <div className="container">
                    <div className="mainContent">
                        <h3 className="fs_68 fc_initial">WE DESIGN AND SCALE
                            <span><img className="img-fluid contentImg" src={Contentimg} alt="img"/></span>
                            <span className="productText"> YOUR DIGITAL PRODUCTS.</span>
                        </h3>
                    </div>
                    <div className="text-center banner3">
                        <div className="circlePosition">
                            <div className="d-none d-md-block">
                                <img className="bounnceArrow img-fluid " src={ArrowB} alt="img"/>
                            </div>
                            <div className="d-block d-md-none">
                                <img className="bounnceArrow img-fluid" src={ArrowS}
                                    alt="img" />
                            </div>

                            <div className="circleTxt">
                                <div className="d-none d-md-block">
                                    <img className="img-fluid" src={Talk} alt="circle"/>
                                </div>
                                <div className="d-block d-md-none">
                                    <img className=" img-fluid" src={TalkS} alt="img"/>
                                </div>

                            </div>
                        </div>
                        <img className="img-fluid" src={Banner1} alt="Banner"/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;