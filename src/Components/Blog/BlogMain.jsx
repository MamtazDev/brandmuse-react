import React from 'react';
import './BlogStyle.css'
import BlogMainTop from './BlogMainTop'
import { Link } from 'react-router-dom';
import Right from '../../assets/images/rightyellowarrow.png'
import Blog1 from '../../assets/images/blog1.png'

const BlogMain = () => {
    return (
        <div className='container'>
            <BlogMainTop />
            <div class="row mb-5 gy-3">
                <div class="col-lg-4 ui">
                    <div class="card blog_card p-4 text-left h-100 ">
                        <img class="img-fluid card-img-top" src={Blog1} alt="img"/>
                            <div class="p-0 card-body">
                                <div class=" d-flex gap-3 mt-4 mb-4">
                                    <button class="blog_button">Design</button>
                                    <button class="blog_button">UI/UX</button>
                                </div>

                                <h5 class="card-title">How does design thinking
                                    work and what does it entail?</h5>
                                <p class="card-text fs_18 fw_400">
                                    Lorem Ipsum has been the industry's
                                    standard dummy text ever since.</p>
                                <Link to="" class="blog-btn-dark fs_18 fw_500 white blog_link">
                                    Read More
                                    <img src={Right} alt="img" />
                                </Link>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogMain;