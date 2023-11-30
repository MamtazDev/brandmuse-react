import React from 'react';
import './Pricing.css';
import Check from '../../../../assets/home1/check.png';
import CheckHover from '../../../../assets/home1/ckeckHover.png';
import { Link } from 'react-router-dom';
import { priceListDatas } from '../../../../Utils/priceListData';


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
                            <input className="form-check-input toggle_desing" type="checkbox" id="flexSwitchCheckChecked" />
                        </div>
                        <p className="fs_24 ">Billed Yearly</p>
                    </div>
                    <div className="row gy-3 justify-content-center">
                        {priceListDatas.map((pricedata, index) =>
                            <div key={index} className="col-md-6 col-lg-4">
                                <div className="d-flex flex-column pricing_card h-100">
                                    <div className="flex-grow-1">
                                        <Link to="/pricing">
                                            <div className="p_card_head d-flex justify-content-start align-items-center mb-2">
                                                <img src={pricedata.logoUrl} alt="img" />
                                                <div className="text-start pricing_text">
                                                    <p className="cardPara">{pricedata.catName}</p>
                                                    <p>{pricedata.catType}</p>
                                                </div>
                                            </div>
                                            <p className="price_details cardPara mb-3">
                                                {pricedata.deltail}
                                            </p>
                                            <p className="price">${pricedata.price} <span>/monthly</span></p>
                                            <p className="darkFont fw-medium mb-3">What’s included</p>
                                            <div className="d-flex flex-column gap-2">
                                                {pricedata.include.map((incData, index) =>
                                                    <div
                                                        className="darkFont fw-normal d-flex justify-content-start align-items-center gap-3" key={index}>
                                                        <img className="checkOpacity" src={Check} alt="#" />
                                                        <img className="checkOpacityHover" src={CheckHover}
                                                            alt="#" />
                                                        <span>{incData}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </Link>
                                    </div>
                                    <div>
                                        <button className="pricing_btn">Get Started</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            {/* <!-- Our Pricing End --> */}
        </div>
    );
};

export default Pricing;