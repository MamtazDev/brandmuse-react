import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import { clientReviewDatas } from '../../Utils/clientReviewData';

const SliderHome3 = () => {
    const options = {
        items: 1,
        loop: true,
        nav: true,
        navText: ["<i className='fa fa-chevron-left'></i>",
            "<i className='fa fa-chevron-right'></i>"],
        autoplay: true,
        dots: false,
    }

    return (
        <div className='sliderHome3'>
            <div className="testimonialBg">
                <div className="container">
                    <div className="sliderInner">
                        <OwlCarousel className='owl-theme' {...options}>
                            {clientReviewDatas.map((data, index) =>
                                <div key={index} className="item slider_wrapper">
                                    <div className="item_wrapper">
                                        <div className="sliderContent">
                                            <p className="fs_32 fc_initial text-center mb-5">
                                                {data.content}
                                            </p>
                                            <hr/>
                                            <div className="d-flex flex-column justify-content-center align-items-center gap-2">
                                                <Link to="/portfolio">
                                                    <img className="profileImg3 img-fluid" src={data.profileImg}
                                                        alt="img" />
                                                </Link>
                                                <p className="fs_32 fc_initial">{data.name}</p>
                                                <p className="fs_18 fc_initial">{data.desgination}</p>
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