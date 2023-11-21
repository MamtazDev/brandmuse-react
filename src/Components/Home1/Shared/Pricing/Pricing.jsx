import React from 'react';
import './Pricing.css';
import BasicPrice from '../../../../assets/home1/priceBasic.png';
import Check from '../../../../assets/home1/check.png';
import CheckHover from '../../../../assets/home1/ckeckHover.png';
import PricePro from '../../../../assets/home1/pricePro.png';
import PriceEnter from '../../../../assets/home1/priceEnterprice.png';
import { Link } from 'react-router-dom';


const Pricing = () => {
    return (
        <div>
            {/* <!-- Our Pricing Start --> */}
            <section className="all_mb">
                <div className="container">
                    <h2 className="sectionHeader text-center inner_mb">Our <span className="txt_curve">Pricing</span></h2>
                    <div className="billed_heading mb-5">
                        <p className="fs_24 headerHilight">Billed Monthly</p>
                        <div className="form-check form-switch">
                            <input className="form-check-input toggle_desing" type="checkbox" id="flexSwitchCheckChecked"/>
                        </div>
                        <p className="fs_24 ">Billed Yearly</p>
                    </div>
                    <div className="row gy-3 justify-content-center">
                        <div className="col-md-6 col-lg-4">
                            <div className="d-flex flex-column pricing_card h-100">
                                <div className="flex-grow-1">
                                    <Link to="/pricing">
                                        <div className="p_card_head d-flex justify-content-start align-items-center mb-2">
                                            <img src={BasicPrice} alt="img" />
                                            <div className="text-start pricing_text">
                                                <p className="cardPara">For individuals</p>
                                                <p>Basic</p>
                                            </div>
                                        </div>
                                        <p className="price_details cardPara mb-3">
                                            Lorem ipsum dolor sit amet doloroli sitiol conse ctetur elit.
                                        </p>
                                        <p className="price">$99 <span>/monthly</span></p>
                                        <p className="darkFont fw-medium mb-3">What’s included</p>
                                        <div className="d-flex flex-column gap-2">
                                            <div
                                                className="darkFont fw-normal d-flex justify-content-start align-items-center gap-3">
                                                <img className="checkOpacity" src={Check} alt="#" />
                                                <img className="checkOpacityHover" src={CheckHover}
                                                    alt="#" />
                                                <span> 4 Social Media Account</span>

                                            </div>
                                            <div
                                                className="darkFont fw-normal d-flex justify-content-start align-items-center gap-3">
                                                <img className="checkOpacity" src={Check} alt="#" />
                                                <img className="checkOpacityHover" src={CheckHover}
                                                    alt="#" />
                                                <span> Free Platform Access</span>
                                            </div>
                                            <div
                                                className="darkFont fw-normal d-flex justify-content-start align-items-center gap-3">
                                                <img className="checkOpacity" src={Check} alt="#" />
                                                <img className="checkOpacityHover" src={CheckHover}
                                                    alt="#" />
                                                <span>Dedicated support</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div>
                                    <button className="pricing_btn">Get Started</button>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="d-flex flex-column pricing_card h-100">
                                <div className="flex-grow-1">
                                    <Link to="/pricing">
                                        <div className="p_card_head d-flex justify-content-start align-items-center mb-2">
                                            <img src={PricePro} alt="img" />
                                            <div className="text-start pricing_text">
                                                <p className="cardPara">For Startups</p>
                                                <p>Pro</p>
                                            </div>
                                        </div>
                                        <p className="price_details cardPara mb-3">
                                            Lorem ipsum dolor sit amet doloroli sitiol conse ctetur elit.
                                        </p>
                                        <p className="price">$199 <span>/monthly</span></p>
                                        <p className="darkFont fw-medium mb-3">What’s included</p>
                                        <div className="d-flex flex-column gap-2">
                                            <div
                                                className="darkFont fw-normal d-flex justify-content-start align-items-center gap-3">
                                                <img className="checkOpacity" src={Check} alt="#" />
                                                <img className="checkOpacityHover" src={CheckHover}
                                                    alt="#" />
                                                <span> 4 Social Media Account</span>
                                            </div>
                                            <div
                                                className="darkFont fw-normal d-flex justify-content-start align-items-center gap-3">
                                                <img className="checkOpacity" src={Check} alt="#" />
                                                <img className="checkOpacityHover" src={CheckHover}
                                                    alt="#" />
                                                <span>Free Platform Access</span>
                                            </div>
                                            <div
                                                className="darkFont fw-normal d-flex justify-content-start align-items-center gap-3">
                                                <img className="checkOpacity" src={Check} alt="#" />
                                                <img className="checkOpacityHover" src={CheckHover}
                                                    alt="#" />
                                                <span>Dedicated support</span>
                                            </div>
                                            <div
                                                className="darkFont fw-normal d-flex justify-content-start align-items-center gap-3">
                                                <img className="checkOpacity" src={Check} alt="#" />
                                                <img className="checkOpacityHover" src={CheckHover}
                                                    alt="#" />
                                                <span>Weekly Backup</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div>
                                    <button className="pricing_btn">Get Started</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="d-flex flex-column pricing_card h-100">
                                <div className="flex-grow-1">
                                    <Link to="/pricing">
                                        <div className="p_card_head d-flex justify-content-start align-items-center mb-2">
                                            <img src={PriceEnter} alt="img" />
                                            <div className="text-start pricing_text">
                                                <p className="cardPara">For big companies</p>
                                                <p>Enterprise</p>
                                            </div>
                                        </div>
                                        <p className="price_details cardPara mb-3">
                                            Lorem ipsum dolor sit amet doloroli sitiol conse ctetur elit.
                                        </p>
                                        <p className="price">$399 <span>/monthly</span></p>
                                        <p className="darkFont fw-medium mb-3">What’s included</p>
                                        <div className="d-flex flex-column gap-2">
                                            <div
                                                className="darkFont fw-normal d-flex justify-content-start align-items-center gap-3">
                                                <img className="checkOpacity" src={Check} alt="#" />
                                                <img className="checkOpacityHover" src={CheckHover}
                                                    alt="#" />
                                                <span>4 Social Media Account</span>
                                            </div>
                                            <div
                                                className="darkFont fw-normal d-flex justify-content-start align-items-center gap-3">
                                                <img className="checkOpacity" src={Check} alt="#" />
                                                <img className="checkOpacityHover" src={CheckHover}
                                                    alt="#" />
                                                <span>Free Platform Access</span>
                                            </div>
                                            <div
                                                className="darkFont fw-normal d-flex justify-content-start align-items-center gap-3">
                                                <img className="checkOpacity" src={Check} alt="#" />
                                                <img className="checkOpacityHover" src={CheckHover}
                                                    alt="#" />
                                                <span>Dedicated support</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div>
                                    <button className="pricing_btn">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Our Pricing End --> */}
        </div>
    );
};

export default Pricing;