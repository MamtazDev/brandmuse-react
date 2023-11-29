import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Content from '../../assets/home2/sliderContent.png'
import { Link } from 'react-router-dom';
import { clientReviewDatas } from '../../Utils/ClientReviewData';

const SliderHome2 = () => {
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
        <div className='sliderHome2'>
            <div class="container">
                <div class="sliderPosition">
                    <div class="sliderInner">
                        <OwlCarousel className='owl-theme' {...options}>
                            {clientReviewDatas.map((data, index) =>
                                <div class="item" key={index}>
                                    <div class="sliderContent">
                                        <div class="d-flex justify-content-center">
                                            <img class="object-fit-contain" src={Content} alt="img" />
                                        </div>

                                        <p class="fs_32 fc_button text-center mb-5">
                                            {data.content}
                                        </p>
                                        <div class="d-flex justify-content-center align-items-center gap-2">
                                            <Link to="/portfolio">
                                                <img class="profileImg img-fluid" src={data.profileImg} alt="img" />
                                            </Link>
                                            <div>
                                                <p class="fs_24 fc_button">{data.name}</p>
                                                <p class="fs_18 fc_txt">{data.desgination}</p>
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