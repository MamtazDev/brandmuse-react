import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { clientReviewDatas } from '../../Utils/ClientReviewData';
import { Link } from 'react-router-dom';

const SliderHome3 = () => {
    const options = {
        items: 1,
        loop: true,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>"],
        autoplay: true,
        dots: false,
    }

    return (
        <div className='sliderHome3'>
            <div class="testimonialBg">
                <div class="container">
                    <div class="sliderInner">
                        <OwlCarousel className='owl-theme' {...options}>
                            {clientReviewDatas.map((data, index) =>
                                <div key={index} class="item slider_wrapper">
                                    <div class="item_wrapper">
                                        <div class="sliderContent">
                                            <p class="fs_32 fc_initial text-center mb-5">
                                                {data.content}
                                            </p>
                                            <div class="d-flex flex-column justify-content-center align-items-center gap-2">
                                                <Link to="/portfolio">
                                                    <img class="profileImg img-fluid" src={data.profileImg}
                                                        alt="img" />
                                                </Link>
                                                <p class="fs_32 fc_initial">{data.name}</p>
                                                <p class="fs_18 fc_initial">{data.desgination}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SliderHome3;