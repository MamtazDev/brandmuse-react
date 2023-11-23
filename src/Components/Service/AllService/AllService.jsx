import React from 'react';
import './AllService.css';
import { allServiceDatas } from '../../../Utils/allServiceData';
import { Link } from 'react-router-dom';
import Arrow from '../../../assets/images/guidance_up-arrow.png';

const AllService = () => {
    return (
        <div>
            <div className="container all_mb">
                <div className="service_cec1_title text-center mt_150">
                    <div className="mb-4 mx-auto">
                        <h2 className="sectionHeader text-center mb-0">Our <span className="txt_curve"> Services</span></h2>
                    </div>
                    <p className="para_text mb-5 d-lg-block d-none">Brandmuse offers a range of design services that <br />
                        are tailored to meet the unique needs of each client</p>
                </div>


                <div className="row gy-5">
                    {allServiceDatas.map((data, index) =>
                        <div key={index} className="col-lg-4 text-center ">
                            <div className="d-flex flex-column service_sec1_padding h-100">
                                <div className='flex-grow-1'>
                                    <img className="service_image mb-3" src={data.imageUrl} alt="img" />
                                    <img className="service_hover_image mb-3" src={data.imageUrl2} alt="img" />
                                    <h3 className="fs_32 titleColor fw_600">{data.title}</h3>
                                    <p className="fs_20 fw_400 black">{data.content}</p>
                                </div>
                                <div className="img_round_yellow_bg">
                                    <Link to={`/service-details/${data.slug}`}>
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