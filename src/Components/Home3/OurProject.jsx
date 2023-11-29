import React from 'react';
import Arrow from '../../assets/home3/rightArrow.png'
import Cat from '../../assets/home3/category.png'
import Cat1 from '../../assets/home3/cat1.png'
import Cat2 from '../../assets/home3/cat2.png'
import Cat3 from '../../assets/home3/cat3.png'
import { Link } from 'react-router-dom';

const OurProject = () => {
    return (
        <div>
            <section class="mb_130 home3Bg">
                <div class="container">
                    <div
                        class="d-flex justify-content-center justify-content-lg-between align-items-center projectLine mb_156">
                        <div class="d-flex flex-column flex-lg-row gap-2 gap-lg-4 align-items-center">
                            <p class="fs_48 fc_initial text-center text-lg-start">Our <span
                                class="fc_primary">Project</span></p>
                            <span class="fs_18 fc_initial text-center text-lg-start">Explore our best project</span>
                        </div>
                        <div class="d-none d-lg-block">
                            <Link class="fs_24 fc_initial" to="/portfolio">
                                View More
                                <img src={Arrow} alt="img" />
                            </Link>
                        </div>
                    </div>

                    <div class="row gy-3 mb-4">
                        <div class="col-md-6">
                            <div class="d-flex flex-column h-100">
                                <div class="flex-grow-1">
                                    <p class="fs_32 fc_primary text-center text-lg-start">Finance</p>
                                    <p class="fs_48 fc_initial text-center text-lg-start">Fintech Saas Landing page</p>
                                    <p class="fs_20 fc_other mb_42 ">
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
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <p class="fc_other fs_32">Catagory</p>
                                        <p class="fc_initial fs_48">Web Development</p>
                                    </div>
                                    <a href="service.html">
                                        <img class="blockImg img-fluid" src={Cat} alt="img" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="overflow-hidden catImg">
                                <a href="service.html">
                                    <img class="blockImg" src={Cat1} alt="img" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="row gy-3">
                        <div class="col-md-6">
                            <div class="overflow-hidden catImg mb-3 ">
                                <a href="service.html">
                                    <img class="blockImg" src={Cat2} alt="img" />
                                </a>
                            </div>
                            <p class="fs_32 fc_primary text-center text-lg-start">Web Development</p>
                            <p class="fc_initial fs_48 text-center text-lg-start">Task Management
                                WebsiteDevelopment</p>
                        </div>
                        <div class="col-md-6">
                            <div class="overflow-hidden catImg mb-3">
                                <a href="service.html">
                                    <img class="blockImg" src={Cat3} alt="img" />
                                </a>
                            </div>
                            <p class="fs_32 fc_primary text-center text-lg-start">App UI/UX Design</p>
                            <p class="fc_initial fs_48 text-center text-lg-start">Real Estate Mobile
                                App Design</p>
                        </div>
                    </div>

                    <div class="d-block d-lg-none">
                        <a class="fs_24 fc_initial d-block mt-4 text-center" href="portfolio.html">
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