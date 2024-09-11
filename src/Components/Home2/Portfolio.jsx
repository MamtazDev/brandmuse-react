import React from 'react';
import { Link } from 'react-router-dom';
import AppDev from '../../assets/home2/appDev.png';
import Fin from '../../assets/home2/fintech.png';
import FinGo from '../../assets/home2/fintechGo.png';
import PortfolioArrow from '../../assets/home2/portfolioArrow.png';
import Portfolioimg from '../../assets/home2/portfolioImg.png';
import Right from '../../assets/home2/rightArrowblack.png';

const Portfolio = () => {
    return (
        <div>
            <section className="mb_120">
                <div className="container">
                    <h2 className="fs_24 subheading fc_button mb_38 text-center text-lg-start ps-2">Portfolio</h2>
                    <div className="d-flex justify-content-center justify-content-lg-between align-items-center mb-3">
                        <p className="fs_48 fc_button text-center text-lg-start">
                            Some Of<br className="d-none d-lg-block"/> The Projects We Have<br className="d-none d-lg-block"/>
                                Done Well
                            </p>
                                <Link to="/portfolio" className="fs_24 fc_button d-none d-lg-block">
                                    View More
                                    <img src={Right} alt="img"/>
                                </Link>
                            </div>

                            <div className="row gy-3 align-items-end mb_32">
                                <div className="col-xl-7">
                                    <div className="imgPortfolio text-center text-xl-start overflow-hidden">
                                        <Link to="/portfolio">
                                            <img className="portfolioArrow d-none d-xl-block img-fluid" src={PortfolioArrow}
                                                alt="img"/>
                                        </Link>
                                        <img className="img-fluid" src={Portfolioimg} alt="img"/>
                                    </div>
                                </div>
                                <div className="col-xl-5 ">
                                    <div className="brandContent text-center text-xl-start">
                                        <p className="fc_nutral fs_20 mb-2">Logo & Branding</p>
                                        <p className="fs_48 fc_button mb-2">
                                            Heleven Logo Branding
                                        </p>
                                        <p className="fc_txt fs_20">
                                            Lorem ipsum dolor sit amet consectetur. Euismod
                                            sollicitudin purus duis aliquam ut ut proin. Urna feugiat leo
                                            vitae elementum diam. Leo quam sit tincidunt lacus integer
                                            sed amet dignissim commodo. Leo quam sit tincidunt lacus
                                            integer sed amet dignissim commodo.
                                        </p>
                                        <hr />
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <p className="fs_32 fc_button">Timeframe</p>
                                                <p className="fs_20 fc_txt">30 Days<br /> Augest-23</p>
                                            </div>
                                            <div>
                                                <p className="fs_32 fc_button">Coverage</p>
                                                <p className="fs_20 fc_txt">Research, ideation,<br/> Branding</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row gy-3">
                                <div className="col-lg-6">
                                    <div className="text-center ">
                                        <div className="overflow-hidden fintech">
                                            <img className="img-fluid text-center" src={Fin} alt="img"/>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-end mt-4">
                                            <div>
                                                <p className="fs_20 fc_nutral mb-2 text-start">UI/UX Design</p>
                                                <p className="fs_48 fc_button">Fintech Website UI/UX</p>
                                            </div>
                                            <Link to="/portfolio">
                                                <img className="fitgoarrow img-fluid" src={FinGo} alt="img"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="text-center">
                                        <div className="fintech overflow-hidden">
                                            <img className=" img-fluid text-center" src={AppDev} alt="img"/>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-end mt-4">
                                            <div>
                                                <p className="fs_20 fc_nutral mb-2 text-start">Development</p>
                                                <p className="fs_48 fc_button">Apps Development</p>
                                            </div>
                                            <Link to="/portfolio">
                                                <img className="fitgoarrow" src={FinGo} alt="img"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className=" d-block d-lg-none ">
                                <Link to="/portfolio" className="fs_24 fc_button d-block text-center mt-4">
                                    View More
                                    <img className="img-fluid" src={Right} alt="img"/>
                                </Link>
                            </div>
                    </div>
            </section>
        </div>
    );
};

export default Portfolio;