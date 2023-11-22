import React from 'react';
import './ServiceDetails.css'
import { useLocation } from 'react-router-dom'
import { allServiceDatas } from '../../Utils/allServiceData'
import { serviceDatas } from '../../Utils/DifferentService/serviceData'
import BreadCrumb from '../../Utils/BreadCrumb/BreadCrumb'

const ServiceDetails = () => {
    const { pathname } = useLocation();
    const findDatas = allServiceDatas.filter(item => pathname.includes(item?.slug));
    const matchingServiceData = serviceDatas.filter(service => {
        return findDatas.some(findData => findData.slug === service.slug);
    });

    return (
        <div>
            <BreadCrumb title="Service Details"></BreadCrumb>
            <div class="container mt_150 all_mb">
                {matchingServiceData.map((serviceDetaildata, index) =>
                    <div key={index}>
                        <div class="mb_64">
                            <div class="mb-5">
                                <h2 className='fs_48' title>{serviceDetaildata?.title}</h2>
                                <div className='d-lg-block d-none'>
                                    <p class="fs_20 grey">
                                        {serviceDetaildata?.detail}
                                    </p>
                                </div>
                            </div>

                            <div class="row gy-3">
                                <div class="col-lg-6">
                                    <div class="overflow-hidden portimg">
                                        <img class="img-fluid" src={serviceDetaildata?.imgUrl} alt="img" />
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="overflow-hidden portimg">
                                        <img class="img-fluid" src={serviceDetaildata?.imgUrl2} alt="img" />
                                    </div>
                                </div>
                            </div>

                            <div class="d-block d-lg-none ">
                                <p class="fs_20 grey text-center mt-3">
                                    {serviceDetaildata?.detail}
                                </p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-8">
                                {serviceDetaildata?.listchild.map((detail, index) =>
                                    <div key={index} class="mb-5 d-lg-flex text-lg-start text-center justify-content-start align-items-center gap-4">
                                        <div class="project_image_div1 mx-auto flex-shrink-0">
                                            <img className='img-fluid' src={detail.icon1} alt="img" />
                                        </div>
                                        <div class="project_title1">
                                            <h5 className='fs_28 title mb-2'> {detail.sub}</h5>
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

export default ServiceDetails;