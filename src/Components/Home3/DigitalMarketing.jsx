import React from 'react';
import Arrow from '../../assets/home3/arrow_12.png'
import Arrow2 from '../../assets/home3/arrow_12cell.png'

const DigitalMarketing = () => {
    return (
        <div>
            <section class="colorBg mb_130">
                <div class="container ">
                    <div class="leftContent">
                        <div class="row gy-3 align-items-center">
                            <div class="col-xl-6 pe-0">
                                <div class=" ">
                                    <h3 class="fs_50 fc_initial text-center text-lg-start">
                                        Digital marketing agency
                                        based in Jakarta, focus on
                                        creative campaign to achieve
                                        your marketing goals.
                                    </h3>
                                </div>
                            </div>
                            <div class="col-xl-1 ps-0">
                                <div class="">
                                    <div class="d-none d-xl-block">
                                        <img class="blockImg object-fit-contain" src={Arrow}
                                            alt="img" />
                                    </div>
                                    <div class="d-block d-xl-none">
                                        <img class="blockImg object-fit-contain" src={Arrow2}
                                            alt="img" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-5">
                                <div class="d-flex flex-column gap_80">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div>
                                            <p class="fs_68 fc_initial mb-2">600K<span class="fc_sec">+</span></p>
                                            <p class="fs_24 fc_initial">Interested People</p>
                                        </div>
                                        <div>
                                            <p class="fs_68 fc_initial mb-2">1300<span class="fc_sec">+</span></p>
                                            <p class="fs_24 fc_initial">Reached Clients</p>
                                        </div>
                                    </div>

                                    <div class="d-flex justify-content-between align-items-center">
                                        <div>
                                            <p class="fs_68 fc_initial mb-2">40.5<span class="fc_sec">%</span></p>
                                            <p class="fs_24 fc_initial">Business Growth</p>
                                        </div>
                                        <div>
                                            <p class="fs_68 fc_initial mb-2">4.9/<span class="fc_sec">5</span></p>
                                            <p class="fs_24 fc_initial">Reviewed by Clients</p>
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