import React from 'react';
import Point from '../../../assets/images/CheckCircle.png'
import DetailClientReview from './DetailClientReview';

const MainDetails = ({ ProjectDetails }) => {
    return (
        <div>
            {ProjectDetails.map((detail, index) =>
                <div key={index}>
                    <h2 className="fs_48 mb-4"> {detail?.companyName} </h2>
                    <div>
                        <img className="w-100 mb-4" src={detail?.detailImg} alt="img" />
                        <div>
                            <p className="sectionHeader text-center text-lg-start mb-4">
                                <span className="txt_curve">Projects</span> Details</p>
                            <p className="mb-4 fs_20 fw_400 grey text-lg-start text-center">
                                {detail?.projectDetails1}
                            </p>
                            <p className="mb-4 fs_20 fw_400 grey text-lg-start text-center">
                                {detail?.projectDetails2}
                            </p>
                        </div>
                        <div className='mb_36'>
                            <div className="mb-4 mx-auto">
                                <p className="sectionHeader text-center text-lg-start mb-0">
                                    <span className="txt_curve">Projects</span>Summery
                                </p>
                            </div>

                            <p className="fs_20 fw_400 grey text-lg-start text-center">
                                {detail?.projectSummary}
                            </p>

                        </div>

                        <div className="row">
                            {detail.summeryList.map((data, index) =>
                                <div className="col-lg-6 mb_36" key={index}>
                                    <img src={Point} alt="img" />
                                    <span className='fs_20 fw_400 grey'>{data}</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <DetailClientReview detail={detail} />
                </div>
            )}
        </div>
    );
};

export default MainDetails;