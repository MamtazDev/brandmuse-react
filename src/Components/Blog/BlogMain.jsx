import React from 'react';
import './BlogStyle.css'
import BlogMainTop from './BlogMainTop'
import { Link } from 'react-router-dom'
import Right from '../../assets/images/rightyellowarrow.png'
import { blogDatas } from '../../Utils/BlogData'
import BlogMainBottom from './BlogMainBottom';
import { useState } from 'react';

const BlogMain = () => {
    const [page, setPage] = useState(1);
    const [amount] = useState(3);
    const lastIndex = page * amount;
    const firstIndex = lastIndex - amount;
    const blogDatas1 = blogDatas.slice(firstIndex, lastIndex)
    return (
        <div className='container'>
            <BlogMainTop />
            <div className="row mb-5 gy-3">
                {blogDatas1.map((blogData, index) =>
                    <div key={index} className="col-lg-4 ui">
                        <div className="card blog_card p-4 text-left h-100 ">
                            <img className="img-fluid card-img-top" src={blogData?.imgUrl} alt="img" />
                            <div className="p-0 card-body">
                                <div className=" d-flex gap-3 mt-4 mb-4">
                                    <button className="blog_button">{blogData?.tag[0]}</button>
                                    <button className="blog_button">{blogData?.tag[1]}</button>
                                </div>

                                <h5 className="card-title">{blogData.title}</h5>
                                <p className="card-text fs_18 fw_400">
                                    {blogData.sub}
                                </p>
                                <Link to={`/blog-detail/${blogData?.blogSlug}`} className="blog-btn-dark fs_18 fw_500 white blog_link">
                                    Read More
                                    <img src={Right} alt="img" />
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div>
                <BlogMainBottom page={page} setPage={setPage} members={blogDatas.length} amount={amount}></BlogMainBottom>
            </div>
        </div>
    );
};

export default BlogMain;