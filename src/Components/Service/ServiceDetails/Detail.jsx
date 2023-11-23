import React from 'react';
import './Detail.css'

const Detail = ({matchingServiceData}) => {
    return (
        <div>
            <div className="container mt_150 all_mb">
                {matchingServiceData.map((serviceDetaildata, index) =>
                    <div key={index}>
                        <div className="mb_64">
                            <div className="mb-5">
                                <h2 className='fs_48 titleColor' >{serviceDetaildata?.title}</h2>
                                <div className='d-lg-block d-none'>
                                    <p className="fs_20 grey">
                                        {serviceDetaildata?.detail}
                                    </p>
                                </div>
                            </div>

                            <div className="row gy-3">
                                <div className="col-lg-6">
                                    <div className="overflow-hidden portimg">
                                        <img className="img-fluid" src={serviceDetaildata?.imgUrl} alt="img" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="overflow-hidden portimg">
                                        <img className="img-fluid" src={serviceDetaildata?.imgUrl2} alt="img" />
                                    </div>
                                </div>
                            </div>

                            <div className="d-block d-lg-none ">
                                <p className="fs_20 grey text-center mt-3">
                                    {serviceDetaildata?.detail}
                                </p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-8">
                                {serviceDetaildata?.listchild.map((detail, index) =>
                                    <div key={index} className="mb-5 d-lg-flex text-lg-start text-center justify-content-start align-items-center gap-4">
                                        <div className="project_image_div1 mx-auto flex-shrink-0">
                                            <img className='img-fluid' src={detail.icon1} alt="img" />
                                        </div>
                                        <div className="project_title1">
                                            <h5 className='fs_28 titleColor mb-2'> {detail.sub}</h5>
                                            <p className='fs_20 grey'>{detail.subDetail}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Detail;