
import React from 'react';
import './ClientReviewSlider.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Client from '../../../../assets/home1/client1.png'

const ClientReviewSlider = () => {

    const options = {
        items: 1,
        loop: true,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>", 
        "<i class='fa fa-chevron-right'></i>"], 
        autoplay: false,
        dots: false,
    }


    return (
        <div>
            {/* <!-- by our clients Slider Start --> */}
            <div className="shadowField">
                <div className="container">
                    <OwlCarousel className='owl-theme' {...options}>
                        <div className="item slider_wrapper">
                            <div className="item_wrapper">
                                <div className="items">
                                    <div className="client_content ">
                                        <div className="inner_mb">
                                            <h2 className="sectionHeader text-center text-lg-start" style={{ fontSize: '24px' }}>By
                                                our <span className="txt_curve">Clients</span>
                                            </h2>

                                        </div>
                                        <p className="slider_text">
                                            "Co-founding your company with Brandmuse means
                                            you get a team of product builders, business
                                            operators, entrepreneurs and fund-raisers."
                                        </p>
                                        <h6 className="fs_24 fw_600 title" style={{ marginBottom: '3px' }}>Sabrina Gomez</h6>
                                        <small className="fs_18 fw_500 grey">CEO Ncx Faster</small>
                                    </div>
                                </div>
                            </div>
                            <div className="slider_img">
                                <img src={Client} alt="img" />
                            </div>
                        </div>
                        <div className="item slider_wrapper">
                            <div className="item_wrapper">
                                <div className="items">
                                    <div className="client_content ">
                                        <div className="inner_mb">
                                            <h2 className="sectionHeader text-center text-lg-start" style={{ fontSize: '24px' }}>By
                                                our <span className="txt_curve">Clients</span>
                                            </h2>

                                        </div>
                                        <p className="slider_text">
                                            "Co-founding your company with Brandmuse means
                                            you get a team of product builders, business
                                            operators, entrepreneurs and fund-raisers."
                                        </p>
                                        <h6 className="fs_24 fw_600 title" style={{ marginBottom: '3px' }}>Sabrina Gomez</h6>
                                        <small className="fs_18 fw_500 grey">CEO Ncx Faster</small>
                                    </div>
                                </div>
                            </div>
                            <div className="slider_img">
                                <img src={Client} alt="img" />
                            </div>
                        </div>
                        <div className="item slider_wrapper">
                            <div className="item_wrapper">
                                <div className="items">
                                    <div className="client_content ">
                                        <div className="inner_mb">
                                            <h2 className="sectionHeader text-center text-lg-start" style={{ fontSize: '24px' }}>By
                                                our <span className="txt_curve">Clients</span>
                                            </h2>

                                        </div>
                                        <p className="slider_text">
                                            "Co-founding your company with Brandmuse means
                                            you get a team of product builders, business
                                            operators, entrepreneurs and fund-raisers."
                                        </p>
                                        <h6 className="fs_24 fw_600 title" style={{ marginBottom: '3px' }}>Sabrina Gomez</h6>
                                        <small className="fs_18 fw_500 grey">CEO Ncx Faster</small>
                                    </div>
                                </div>
                            </div>
                            <div className="slider_img">
                                <img src={Client} alt="img" />
                            </div>
                        </div>
                    </OwlCarousel>

                </div>
            </div>

        </div>
    );
};

export default ClientReviewSlider;