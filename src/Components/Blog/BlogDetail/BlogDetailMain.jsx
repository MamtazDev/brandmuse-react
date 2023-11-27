import React from 'react';
import '../BlogStyle.css'
import BlogCommentForm from './BlogCommentForm';

const BlogDetailMain = () => {
    return (
        <div>

            <div className="blog_details_wrapper">
                <img className="w-100 blog_details_image" src="/images/bd1.png" alt="" />
                <p className="mt-4 mb-4 fs_20 fw_400 grey">Lorem ipsum dolor sit amet, consectetur adipiscing successful projects.</p>
                <p className=" fs_20 fw_400 grey">Lorem ipsum dolor sit amet consectetur. Ipsum vitae tincidunt eu sit in egestas molestie nisl. Interdum euismod mattis euismod vulputate non.</p>
                <ul className="fs_20 fw-400 grey blog-details-ul">
                    <li>morbi dictumst congue risus luctus</li>
                    <li>Porttitor nibh est vulputate vitae sem vitae.</li>
                    <li>Amet tellus nisl risus lorem vulputate velit eget.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </ul>
            </div>

           

            {/* <!-- design thinking --> */}
            <div>
                <div className="design_thinking_wrapper">
                    <p className="sectionHeader text-lg-start text-center inner_mb">The significance of <br
                        className="d-lg-none d-block" /><span className="txt_curve">Design
                            Thinking </span>for <br />
                        any company</p>
                    <p className="mt-4 mb-4 fs_20 fw_400 grey">Lorem ipsum dolor sit amet, consectetur
                        adipiscing
                        elit proin mi pellentesque lorem turpis
                        feugiat non sed sed sed aliquam lectus sodales gravida turpis maassa odio. we'll
                        explore
                        the
                        importance of design in the software development process and how it can lead to more
                        successful projects.</p>
                    <p className=" fs_20 fw_400 grey">Lorem ipsum dolor sit amet consectetur. Ipsum vitae
                        tincidunt adipiscing sed tellus nulla sit ultrices. Arcu maecenas quam iaculis
                        ullamcorper id posuere. Leo congue nulla quam pharetra. Pellentesque morbi dictumst
                        congue risus luctus. Dictum eu maecenas ipsum dolor vel imperdiet. Euismod fermentum
                        sed quisque risus malesuada molestie. Aliquam ut vel penatibus eu sit in egestas
                        molestie nisl. Interdum euismod mattis euismod vulputate non.</p>
                </div>


                <div className="tags_text d-lg-none d-block mt-5 text-center">Tags :</div>
                <div className="d-flex blog_btns  small_device_blog_btns mb_48 mt-5">
                    <button className="tags_text d-lg-block d-none">Tags</button>
                    <button className="blue_btn1 white">UI/UX</button>
                    <button className="blue_btn1 white">Landing Page</button>
                    <button className="blue_btn1 white">Website</button>
                    <button className="blue_btn1 white">App Design</button>
                    <button className="blue_btn1 white">Finance</button>
                </div>
                <div className="tags_text d-lg-none d-block mt-5 text-center">Social :</div>
                <div
                    className="d-flex flex-wrap justify-content-lg-start justify-content-center blog_btns mb_150">

                    <button className="tags_text d-lg-block d-none">Social :</button>
                    <a href="https://www.facebook.com/">
                        <img className="img-fluid social_image" src="/images/facebook.png" alt="img" />
                    </a>
                    <a href="https://www.linkedin.com/">
                        <img className="img-fluid social_image" src="/images/linkdin.png" alt="img" />
                    </a>
                    <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D
                                " className="d-block overflow-hidden">
                        <img className="img-fluid social_image" src="/images/twitter1.png" alt="img" />
                    </a>
                    <a href="https://www.pinterest.com/login/">
                        <img className="img-fluid social_image" src="/images/pinterest.png" alt="img" />
                    </a>
                </div>

            </div>
            {/* <!-- design thinking --> */}

            <BlogCommentForm />
        </div>
    );
};

export default BlogDetailMain;