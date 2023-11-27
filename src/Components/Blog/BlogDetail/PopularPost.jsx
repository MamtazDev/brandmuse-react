import React from 'react';
import '../BlogStyle.css'
import AI from '../../../assets/images/blog-dir.png'
import FaceBook from '../../../assets/images/faceblu.png'
import TW from '../../../assets/images/twiblue.png'
import Ins from '../../../assets/images/insta.png'
import Pin from '../../../assets/images/pinteblue.png'
import Img2 from '../../../assets/images/bd2.png'
import Img3 from '../../../assets/images/bd3.png'
import Img4 from '../../../assets/images/bd4.png'

const PopularPost = () => {
    return (
        <div>
            <div className="popular_wrapper mt_30">
                <div className="popular_title">
                    <p className="mb-0 ">Popular Post</p>
                </div>

                <div className="d-flex p_bd  gap-4">
                    <div>
                        <img className="img-fluid" src={Img2} alt="img" />
                    </div>
                    <div>
                        <h6>Our encounter at the
                            New York WordCamp</h6>
                        <p className="fw_400 fs_18">June 10, 2023</p>
                    </div>
                </div>
                <div className="d-flex p_bd  gap-4">
                    <div>
                        <img className="img-fluid" src={Img3} alt="img" />
                    </div>
                    <div>
                        <h6>Our encounter at the
                            New York WordCamp</h6>
                        <p className="fw_400 fs_18">June 10, 2023</p>
                    </div>
                </div>
                <div className="d-flex  p_bd gap-4">
                    <div>
                        <img className="img-fluid" src={Img4} alt="img" />
                    </div>
                    <div>
                        <h6>Our encounter at the
                            New York WordCamp</h6>
                        <p className="fw_400 fs_18">June 10, 2023</p>
                    </div>
                </div>

            </div>
            <div className="popular_wrapper mt_30">
                <div className="popular_title">
                    <p className="mb-0">Catagory</p>
                </div>
                <div className="d-flex gap-2 p_bd1 align-items-center blog-right-text">
                    <img className="img-fluid" src={AI} alt="img" /> AI
                </div>
                <div className=" d-flex gap-2 p_bd1 align-items-center blog-right-text">
                    <img className="img-fluid" src={AI} alt="img" /> UI/UX
                </div>
                <div className=" d-flex gap-2 p_bd1 align-items-center blog-right-text">
                    <img className="img-fluid" src={AI} alt="img" /> Digital
                </div>
                <div className=" d-flex gap-2 p_bd1 align-items-center blog-right-text">
                    <img className="img-fluid" src={AI} alt="img" /> Intelligence
                </div>
                <div className=" d-flex gap-2 p_bd1 align-items-center blog-right-text">
                    <img className="img-fluid" src={AI} alt="img" /> Marketing
                </div>
            </div>


            <div className="popular_wrapper mt_30">
                <div className="popular_title">
                    <p className="mb-0">Follow Us!</p>
                </div>
                <div
                    className=" d-flex gap-2 p_bd1 align-items-center blog-right-text justify-content-center justify-content-lg-start">
                    <a href="https://www.facebook.com/">
                        <img className="img-fluid" src={FaceBook} alt="img" />
                    </a>
                    <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D
                                " className="d-block overflow-hidden">
                        <img className="img-fluid" src={TW} alt="img" />
                    </a>
                    <a href="https://www.instagram.com/accounts/login/">
                        <img className="img-fluid" src={Ins} alt="img" />
                    </a>
                    <a href="https://www.pinterest.com/login/">
                        <img className="img-fluid" src={Pin} alt="img" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PopularPost;