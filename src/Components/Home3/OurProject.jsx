import React from 'react';
import { Link } from 'react-router-dom';
import Cat1 from '../../assets/home3/cat1.png';
import Cat2 from '../../assets/home3/cat2.png';
import Cat3 from '../../assets/home3/cat3.png';
import Cat from '../../assets/home3/category.png';
import Arrow from '../../assets/home3/rightArrow.png';

const OurProject = () => {
    return (
        <div>
            <section className="mb_130 home3Bg">
                <div className="container">
                    <div
                        className="d-flex justify-content-center justify-content-lg-between align-items-center projectLine mb_156">
                        <div className="d-flex flex-column flex-lg-row gap-2 gap-lg-4 align-items-center">
                            <p className="fs_48 fc_initial text-center text-lg-start">Our <span
                                className="fc_primary">Project</span></p>
                            <span className="fs_18 fc_initial text-center text-lg-start">Explore our best project</span>
                        </div>
                        <div className="d-none d-lg-block">
                            <Link className="fs_24 fc_initial" to="/portfolio">
                                View More
                                <img src={Arrow} alt="img" />
                            </Link>
                        </div>
                    </div>

                    <div className="row gy-3 mb-4">
                        <div className="col-md-6">
                            <div className="d-flex flex-column h-100">
                                <div className="flex-grow-1">
                                    <p className="fs_32 fc_primary text-center text-lg-start">Finance</p>
                                    <p className="fs_48 fc_initial text-center text-lg-start">Fintech Saas Landing page</p>
                                    <p className="fs_20 fc_other mb_42 ">
                                        Lorem ipsum dolor sit amet consectetur. Euismod
                                        sollicitudin purus duis aliquam ut ut proin. Urna feugiat leo
                                        vitae elementum diam. Leo quam sit tincidunt lacus integer
                                        sed amet dignissim commodo. Leo quam sit tincidunt lacus
                                        integer sed amet dignissim commodo. Leo quam sit tincidunt
                                        lacus integer sed amet dignissim commodo. Leo quam sit
                                        tincidunt lacus integer sed amet dignissim commodo. Leo
                                        quam sit tincidunt lacus integer sed amet dignissim commodo.
                                        Leo quam sit tincidunt lacus integer sed amet dignissim
                                        commodo.
                                    </p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <p className="fc_other fs_32">Catagory</p>
                                        <p className="fc_initial fs_48">Web Development</p>
                                    </div>
                                    <a href="service.html">
                                        <img className="blockImg img-fluid" src={Cat} alt="img" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="overflow-hidden catImg">
                                <a href="service.html">
                                    <img className="blockImg" src={Cat1} alt="img" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="row gy-3">
                        <div className="col-md-6">
                            <div className="overflow-hidden catImg mb-3 ">
                                <a href="service.html">
                                    <img className="blockImg" src={Cat2} alt="img" />
                                </a>
                            </div>
                            <p className="fs_32 fc_primary text-center text-lg-start">Web Development</p>
                            <p className="fc_initial fs_48 text-center text-lg-start">Task Management
                                WebsiteDevelopment</p>
                        </div>
                        <div className="col-md-6">
                            <div className="overflow-hidden catImg mb-3">
                                <a href="service.html">
                                    <img className="blockImg" src={Cat3} alt="img" />
                                </a>
                            </div>
                            <p className="fs_32 fc_primary text-center text-lg-start">App UI/UX Design</p>
                            <p className="fc_initial fs_48 text-center text-lg-start">Real Estate Mobile
                                App Design</p>
                        </div>
                    </div>

                    <div className="d-block d-lg-none">
                        <a className="fs_24 fc_initial d-block mt-4 text-center" href="portfolio.html">
                            View More
                            <img src={Arrow} alt="img" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurProject;