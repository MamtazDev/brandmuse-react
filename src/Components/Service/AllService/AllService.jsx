import React from 'react';
import './AllService.css';
import { allServiceDatas } from '../../../Utils/allServiceData';
import { Link } from 'react-router-dom';
import Arrow from '../../../assets/images/guidance_up-arrow.png';

const AllService = () => {
    return (
        <div>
            <div class="container all_mb">
                <div class="service_cec1_title text-center mt_150">
                    <div class="mb-4 mx-auto">
                        <h2 class="sectionHeader text-center mb-0">Our <span class="txt_curve"> Services</span></h2>
                    </div>
                    <p class="para_text mb-5 d-lg-block d-none">Brandmuse offers a range of design services that <br />
                        are tailored to meet the unique needs of each client</p>
                </div>


                <div class="row gy-3">
                    {allServiceDatas.map((data, index) =>
                        <div key={index} class="col-lg-4 text-center">
                            <div className="d-flex flex-column service_sec1_padding h-100">
                                <div className='flex-grow-1'>
                                    <img class="service_image mb-3" src={data.imageUrl} alt="img" />
                                    <img class="service_hover_image mb-3" src={data.imageUrl2} alt="img" />
                                    <h3 class="fs_32 title fw_600 black">{data.title}</h3>
                                    <p class="fs_20 fw_400 black">{data.content}</p>
                                </div>
                                <div class="img_round_yellow_bg">
                                    <Link to="#">
                                        <img src={Arrow} alt="img" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                    
                </div>
            </div>

        </div>
    );
};

export default AllService;