import React from 'react';
import '../BlogStyle.css'
import Img1 from '../../../assets/images/koma1.png'
import Img2 from '../../../assets/images/koma2.png'

const BlogClientReview = ({review}) => {
    return (
        <div>
            <div className="border_left_blog w-100 mb_56">
                <div className="review_wrapper">
                    <div className="review_details position-relative">
                        <img className="img-fluid" src={Img1} alt="img" />

                        <div>
                            <h6 className=" mb-3 fst-italic para" style={{ maxWidth: '590px' }}>
                                {review.clientReview}
                            </h6>
                            <p className="fs_24 fw_600 black">
                                {review.clientName}
                            </p>
                        </div>
                    
                        <div className="koma2_img">
                            <img className="img-fluid" src={Img2} alt="img" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BlogClientReview;