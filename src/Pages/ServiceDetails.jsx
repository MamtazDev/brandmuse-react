import React from 'react';
import { useLocation } from 'react-router-dom'
import { allServiceDatas } from '../Utils/allServiceData'
import { serviceDatas } from '../Utils/DifferentService/serviceData'
import BreadCrumb from '../Utils/BreadCrumb/BreadCrumb'
import Detail from '../Components/Service/ServiceDetails/Detail';

const ServiceDetails = () => {
    const { pathname } = useLocation();
    const findDatas = allServiceDatas.filter(item => pathname.includes(item?.slug));
    const matchingServiceDatas = serviceDatas.filter(service => {
        return findDatas.some(findData => findData.slug === service.slug);
    });

    return (
        <div>
            <BreadCrumb title="Service Details" title1="Service Details"></BreadCrumb>
            <Detail matchingServiceData = {matchingServiceDatas} />
        </div>
    );
};

export default ServiceDetails;