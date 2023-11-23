import React from 'react';
import './PortfolioDetail.css'
import Img1 from '../../../assets/images/koma1.png'
import Img2 from '../../../assets/images/koma2.png'

const DetailClientReview = ({ detail }) => {
    return (
        <div>
            {/* <!-- review --> */}
            <div class="border_left w-100">
                <div class="review_wrapper">
                    <div class="review_details position-relative">
                        <img class="img-fluid" src={Img1} alt="img" />
                        <div>
                            <h6 class=" mb-3 fst-italic para">
                                {detail.clientReview}
                            </h6>
                            <p class="fs_24 fw_600 black">{detail.clientName}</p>
                        </div>
                        <div class="koma2_img">
                            <img class="img-fluid" src={Img2} alt="img" />
                        </div>
                    </div>

                </div>
            </div>
            {/* <!-- review --> */}
        </div>
    );
};

export default DetailClientReview;