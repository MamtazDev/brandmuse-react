import React from 'react';
import '../BlogStyle.css'
import Search from '../../../assets/images/search.png'
import PopularPost from './PopularPost';

const BlogDetailSidebar = () => {
    return (
        <div>
            <div className="blogdetails_search_wrapper">
                <div className="d-flex gap-2">
                    <input style={{ height: '57px', width: '100%' }} type="text" className="form-control search_input"
                        placeholder="Type & Search" />
                    <button className="search_btn">
                        <img className="img-fluid" src={Search} alt="img" />
                    </button>
                </div>
            </div>
            {/* <!-- newslater --> */}
            <div className="newsletter_wrapper mt_30">
                <p className="fs_32 white fw_600 mb-2">Newsletter</p>

                <small className="fs_18 white">Sign up our newsletter to get update information, news and free insight.</small>

                <div className="form-group">
                    <input type="email" style={{ height: '58px' }} className="form-control mt-5"
                        placeholder="E-mail" />
                </div>
                <button className="bd_btn">Sign up</button>
            </div>


            {/* <!-- newslater --> */}

            {/* <!-- popular post --> */}
            
           <PopularPost />

        </div>
    );
};

export default BlogDetailSidebar;