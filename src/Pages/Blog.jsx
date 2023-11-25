import React from 'react';
import BreadCrumb from '../Utils/BreadCrumb/BreadCrumb';
import BlogMain from '../Components/Blog/BlogMain';

const Blog = () => {
    return (
        <div>
            <BreadCrumb title="Blog" title1="Blog"/>
            <BlogMain/>
        </div>
    );
};

export default Blog;