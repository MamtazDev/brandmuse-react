import React from 'react';
import './BreadCurmb.css';
import Arrow from '../../assets/home1/breadcrumb.png'
import Arrow1 from '../../assets/home1/breadcrumb1.png'
import Design from '../../assets/home1/design.png'
import Clock from '../../assets/home1/clock.png'
import User from '../../assets/home1/bloguser.png'
import { Link, useLocation } from 'react-router-dom';

const BlogDetailsBreadCrumb = ({title, title1}) => {
    const location = useLocation();
    const path = location.pathname;
    return (
        <div>
            <section className="about_container all_mb">
                <div className="container">
                    <div className='headerWidth mx-auto'>
                        <h3 className="breadcrumb_title  mb-4">{title1}</h3>
                        <div className="d-flex justify-content-center align-items-center gap-4 mb-4">
                            <a className="fs_18 text-white d-flex justify-content-center gap-2 align-items-center">
                                <img src={User} alt="User" />
                                Admin
                            </a>
                            <a className="fs_18 text-white d-flex justify-content-center gap-2 align-items-center">
                                <img src={Clock} alt="Clock" />
                                April 4, 2023
                            </a>
                            <a className="fs_18 text-white d-flex justify-content-center gap-2 align-items-center">
                                <img src={Design} alt="Design" />
                                Design
                            </a>
                        </div>

                        <div className="pageLink d-flex justify-content-center align-items-center gap-2">
                            <Link to='/' className="text-white ">Home</Link>
                            <span className="d-none d-lg-block"><img className="img-fluid" src={Arrow}alt="img"/></span>
                            <span className="d-block d-lg-none"><img className="img-fluid" src={Arrow1} alt="img"/></span>
                            <Link to={path} className="text-white">{title}</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogDetailsBreadCrumb;