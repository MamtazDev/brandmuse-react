import React from 'react';
import './BlogStyle.css'
import Search from '../../assets/images/search.png'

const BlogMainTop = () => {
    return (
        <div className='mb-5'>
            <p className="sectionHeader text-center mt_150" style={{ marginBottom: "76px" }}>Some
                <span className="txt_curve">recent blogs </span>to <br />
                learn more about us.
            </p>
            {/* <!-- search container --> */}
            <label htmlFor="exampleFormControlInput1" className="form-label blog_search_label">By
                keyword</label>
            <div className="row align-items-center">
                <div className="col-lg-4">
                    <div>
                        <div className="d-flex gap-2">
                            <input type="email" className="form-control search_input" id="exampleFormControlInput1"
                                placeholder="Search by keyword" />
                            <button className="search_btn">
                                <img className="img-fluid" src={Search} alt="#" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 mt-5 mt-lg-0 small_device_blog_btns">
                    <div className="d-flex blog_btns filterBtn">
                        <button className="blue_btn1 blue_btn_active">All</button>
                        <button className="blue_btn1">UI/UX</button>
                        <button className="blue_btn1">Landing Page</button>
                        <button className="blue_btn1">Website</button>
                        <button className="blue_btn1">App Design</button>
                        <button className="blue_btn1">Finance</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogMainTop;