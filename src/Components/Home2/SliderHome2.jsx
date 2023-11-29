import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Content from '../../assets/home2/sliderContent.png'

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
        <div>
            <div class="container">
                <div class="sliderPosition">
                    <div class="sliderInner">
                        <OwlCarousel className='owl-theme' {...options}>
                            <div class="item slider_wrapper">
                                <div class="item_wrapper">
                                    <div class="sliderContent">
                                        <div class="d-flex justify-content-center">
                                            <img class="object-fit-contain" src={Content} alt="img" />
                                        </div>
                                        <p class="fs_32 fc_button text-center mb-5">
                                            They thoroughly analyze our industry and target audience, allowing
                                            them to develop customized campaigns that effectively reach and engage
                                            our customers. Their creative ideas and cutting-edge techniques have
                                            helped us stay ahead of the competition.
                                        </p>
                                        <div class="d-flex justify-content-center align-items-center gap-2">
                                            <a href="#">
                                                <img class="profileImg img-fluid" src="./assets/home2/profile.png"
                                                    alt="img" />
                                            </a>
                                            <div>
                                                <p class="fs_24 fc_button">Sabrina Gomez</p>
                                                <p class="fs_18 fc_txt">CEO Ncx Faster</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderHome2;