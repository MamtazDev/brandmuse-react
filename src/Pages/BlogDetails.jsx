import React from 'react';
import BlogDetailsBreadCrumb from '../Utils/BreadCrumb/BlogDetailsBreadCrumb';
import { blogDatas } from '../Utils/BlogData';
import { useLocation } from 'react-router-dom';
import BlogDetailSidebar from '../Components/Blog/BlogDetail/BlogDetailSidebar';
import BlogDetailMain from '../Components/Blog/BlogDetail/BlogDetailMain';

const BlogDetails = () => {
    const { pathname } = useLocation();
    const blogDetails = blogDatas.filter(item => pathname.includes(item.blogSlug))
    return (
        <div>
            {blogDetails.map((data, index) =>
                <div key={index} className='detailWidth'>
                    <BlogDetailsBreadCrumb title="Blog Details" title1={data.title} />
                </div>
            )}


            <section className="all_mb">
                <div className="container">
                    <div className="row gy-3">
                        <div className="col-lg-8">
                            <BlogDetailMain  blogDetails ={blogDetails} />
                        </div>
                        <div className="col-lg-4">
                            <BlogDetailSidebar blogDetails ={blogDetails} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

};

export default BlogDetails;