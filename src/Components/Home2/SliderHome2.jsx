import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import Content from '../../assets/home2/sliderContent.png';
import { clientReviewDatas } from '../../Utils/clientReviewData';

const SliderHome2 = () => {
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
        <div className='sliderHome2'>
            <div className="container">
                <div className="sliderPosition">
                    <div className="sliderInner">
                        <OwlCarousel className='owl-theme' {...options}>
                            {clientReviewDatas.map((data, index) =>
                                <div className="item" key={index}>
                                    <div className="sliderContent">
                                        <div className="d-flex justify-content-center">
                                            <img className="object-fit-contain" src={Content} alt="img" />
                                        </div>

                                        <p className="fs_32 fc_button text-center mb-5">
                                            {data.content}
                                        </p>
                                        <div className="d-flex justify-content-center align-items-center gap-2">
                                            <Link to="/portfolio">
                                                <img className="profileImg img-fluid" src={data.profileImg} alt="img" />
                                            </Link>
                                            <div>
                                                <p className="fs_24 fc_button">{data.name}</p>
                                                <p className="fs_18 fc_txt">{data.desgination}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderHome2;