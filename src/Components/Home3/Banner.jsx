import React from 'react';
import Contentimg from '../../assets/home3/contentImg.png'
import ArrowB from '../../assets/home3/guidance_up-arrow.png'
import ArrowS from '../../assets/home3/guidance_up-arrowSmall.png'
import Talk from '../../assets/home3/talkCircle.png'
import TalkS from '../../assets/home3/talkCircleSmall.png'
import Banner1 from '../../assets/home3/banner1.png'

const Banner = () => {
    return (
        <div>
            <section class="mb_130 home3 home3Bg">
                <div class="container">
                    <div class="mainContent">
                        <h3 class="fs_68 fc_initial">WE DESIGN AND SCALE
                            <span><img class="img-fluid contentImg" src={Contentimg} alt="img"/></span>
                            <span class="productText"> YOUR DIGITAL PRODUCTS.</span>
                        </h3>
                    </div>
                    <div class="text-center banner3">
                        <div class="circlePosition">
                            <div class="d-none d-md-block">
                                <img class="bounnceArrow img-fluid " src={ArrowB} alt="img"/>
                            </div>
                            <div class="d-block d-md-none">
                                <img class="bounnceArrow img-fluid" src={ArrowS}
                                    alt="img" />
                            </div>

                            <div class="circleTxt">
                                <div class="d-none d-md-block">
                                    <img class="img-fluid" src={Talk} alt="circle"/>
                                </div>
                                <div class="d-block d-md-none">
                                    <img class=" img-fluid" src={TalkS} alt="img"/>
                                </div>

                            </div>
                        </div>
                        <img class="img-fluid" src={Banner1} alt="Banner"/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;