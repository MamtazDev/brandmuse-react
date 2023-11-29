import React from 'react';
import Right from '../../assets/home2/rightArrowblack.png'
import PortfolioArrow from '../../assets/home2/portfolioArrow.png'
import Portfolioimg from '../../assets/home2/portfolioImg.png'
import Fin from '../../assets/home2/fintech.png'
import FinGo from '../../assets/home2/fintechGo.png'
import AppDev from '../../assets/home2/appDev.png'
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div>
            <section class="mb_120">
                <div class="container">
                    <h2 class="fs_24 subheading fc_button mb_38 text-center text-lg-start ps-2">Portfolio</h2>
                    <div class="d-flex justify-content-center justify-content-lg-between align-items-center mb-3">
                        <p class="fs_48 fc_button text-center text-lg-start">
                            Some Of<br class="d-none d-lg-block"/> The Projects We Have<br class="d-none d-lg-block"/>
                                Done Well
                            </p>
                                <Link to="/portfolio" class="fs_24 fc_button d-none d-lg-block">
                                    View More
                                    <img src={Right} alt="img"/>
                                </Link>
                            </div>

                            <div class="row gy-3 align-items-end mb_32">
                                <div class="col-xl-7">
                                    <div class="imgPortfolio text-center text-xl-start overflow-hidden">
                                        <Link to="/portfolio">
                                            <img class="portfolioArrow d-none d-xl-block img-fluid" src={PortfolioArrow}
                                                alt="img"/>
                                        </Link>
                                        <img class="img-fluid" src={Portfolioimg} alt="img"/>
                                    </div>
                                </div>
                                <div class="col-xl-5 ">
                                    <div class="brandContent text-center text-xl-start">
                                        <p class="fc_nutral fs_20 mb-2">Logo & Branding</p>
                                        <p class="fs_48 fc_button mb-2">
                                            Heleven Logo Branding
                                        </p>
                                        <p class="fc_txt fs_20">
                                            Lorem ipsum dolor sit amet consectetur. Euismod
                                            sollicitudin purus duis aliquam ut ut proin. Urna feugiat leo
                                            vitae elementum diam. Leo quam sit tincidunt lacus integer
                                            sed amet dignissim commodo. Leo quam sit tincidunt lacus
                                            integer sed amet dignissim commodo.
                                        </p>
                                        <hr />
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <p class="fs_32 fc_button">Timeframe</p>
                                                <p class="fs_20 fc_txt">30 Days<br /> Augest-23</p>
                                            </div>
                                            <div>
                                                <p class="fs_32 fc_button">Coverage</p>
                                                <p class="fs_20 fc_txt">Research, ideation,<br/> Branding</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row gy-3">
                                <div class="col-lg-6">
                                    <div class="text-center ">
                                        <div class="overflow-hidden fintech">
                                            <img class="img-fluid text-center" src={Fin} alt="img"/>
                                        </div>
                                        <div class="d-flex justify-content-between align-items-end mt-4">
                                            <div>
                                                <p class="fs_20 fc_nutral mb-2 text-start">UI/UX Design</p>
                                                <p class="fs_48 fc_button">Fintech Website UI/UX</p>
                                            </div>
                                            <Link to="/portfolio">
                                                <img class="fitgoarrow img-fluid" src={FinGo} alt="img"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="text-center">
                                        <div class="fintech overflow-hidden">
                                            <img class=" img-fluid text-center" src={AppDev} alt="img"/>
                                        </div>
                                        <div class="d-flex justify-content-between align-items-end mt-4">
                                            <div>
                                                <p class="fs_20 fc_nutral mb-2 text-start">Development</p>
                                                <p class="fs_48 fc_button">Apps Development</p>
                                            </div>
                                            <Link to="/portfolio">
                                                <img class="fitgoarrow" src={FinGo} alt="img"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class=" d-block d-lg-none ">
                                <Link to="/portfolio" class="fs_24 fc_button d-block text-center mt-4">
                                    View More
                                    <img class="img-fluid" src={Right} alt="img"/>
                                </Link>
                            </div>
                    </div>
            </section>
        </div>
    );
};

export default Portfolio;