import React from 'react';
import './BlogStyle.css'
import Search from '../../assets/images/search.png'

const BlogMainTop = () => {
    return (
        <div className='mb-5'>
            <p class="sectionHeader text-center mt_150" style={{ marginBottom: "76px" }}>Some
                <span class="txt_curve">recent blogs </span>to <br/>
                    learn more about us.
            </p>
            {/* <!-- search container --> */}
            <label for="exampleFormControlInput1" class="form-label blog_search_label">By
                keyword</label>
            <div class="row align-items-center">
                <div class="col-lg-4">
                    <div>
                        <div class="d-flex gap-2">
                            <input type="email" class="form-control search_input" id="exampleFormControlInput1"
                                placeholder="Search by keyword"/>
                                <button class="search_btn">
                                    <img class="img-fluid" src={Search} alt="#"/>
                                </button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 mt-5 mt-lg-0 small_device_blog_btns">
                    <div class="d-flex blog_btns filterBtn">
                        <button class="blue_btn white">All</button>
                        <button class="blue_btn1 white">UI/UX</button>
                        <button class="blue_btn1 white">Landing Page</button>
                        <button class="blue_btn1 white">Website</button>
                        <button class="blue_btn1 white">App Design</button>
                        <button class="blue_btn1 white">Finance</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogMainTop;