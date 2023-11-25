import React from 'react';
import './PortfolioDetail.css'
import Img1 from '../../../assets/images/koma1.png'
import Img2 from '../../../assets/images/koma2.png'

const DetailClientReview = ({ detail }) => {
    return (
        <div>
            {/* <!-- review --> */}
            <div className="border_left w-100">
                <div className="review_wrapper">
                    <div className="review_details position-relative">
                        <img className="img-fluid" src={Img1} alt="img" />
                        <div>
                            <h6 className=" mb-3 fst-italic para">
                                {detail.clientReview}
                            </h6>
                            <p className="fs_24 fw_600 black">{detail.clientName}</p>
                        </div>
                        <div className="koma2_img">
                            <img className="img-fluid" src={Img2} alt="img" />
                        </div>
                    </div>

                </div>
            </div>
            {/* <!-- review --> */}
        </div>
    );
};

export default DetailClientReview;