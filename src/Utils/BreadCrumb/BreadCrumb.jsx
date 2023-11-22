import React from 'react';
import './BreadCurmb.css';
import Arrow from '../../assets/home1/breadcrumb.png'
import Arrow1 from '../../assets/home1/breadcrumb1.png'
import { Link, useLocation } from 'react-router-dom';

const BreadCrumb = ({title}) => {
    const location = useLocation();
    const path = location.pathname;
    return (
        <div>
            <section className="about_container all_mb">
                <div className="container">
                    <div>
                        <h3 className="breadcrumb_title">{title}</h3>
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

export default BreadCrumb;