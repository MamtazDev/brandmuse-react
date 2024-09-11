import React from 'react';
import Arrow from '../../assets/home3/arrow_12.png';
import Arrow2 from '../../assets/home3/arrow_12cell.png';

const DigitalMarketing = () => {
    return (
        <div>
            <section className="colorBg mb_130">
                <div className="container ">
                    <div className="leftContent">
                        <div className="row gy-3 align-items-center">
                            <div className="col-xl-6 pe-0">
                                <div className=" ">
                                    <h3 className="fs_50 fc_initial text-center text-lg-start">
                                        Digital marketing agency
                                        based in Jakarta, focus on
                                        creative campaign to achieve
                                        your marketing goals.
                                    </h3>
                                </div>
                            </div>
                            <div className="col-xl-1 ps-0">
                                <div className="">
                                    <div className="d-none d-xl-block">
                                        <img className="blockImg object-fit-contain" src={Arrow}
                                            alt="img" />
                                    </div>
                                    <div className="d-block d-xl-none">
                                        <img className="blockImg object-fit-contain" src={Arrow2}
                                            alt="img" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5">
                                <div className="d-flex flex-column gap_80">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <p className="fs_68 fc_initial mb-2">600K<span className="fc_sec">+</span></p>
                                            <p className="fs_24 fc_initial">Interested People</p>
                                        </div>
                                        <div>
                                            <p className="fs_68 fc_initial mb-2">1300<span className="fc_sec">+</span></p>
                                            <p className="fs_24 fc_initial">Reached Clients</p>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <p className="fs_68 fc_initial mb-2">40.5<span className="fc_sec">%</span></p>
                                            <p className="fs_24 fc_initial">Business Growth</p>
                                        </div>
                                        <div>
                                            <p className="fs_68 fc_initial mb-2">4.9/<span className="fc_sec">5</span></p>
                                            <p className="fs_24 fc_initial">Reviewed by Clients</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DigitalMarketing;