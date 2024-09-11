import React from 'react';
import { Link } from 'react-router-dom';
import Right from '../../assets/home2/rightArrow.png';

const Faq = () => {
    return (
        <div>
            <section>
                <div className="container">
                    <p className="fs_24 middleheading fc_button mb_38 text-center">FAQ</p>
                    <p className="fs_48 fc_button text-center mb-5">Frequently Ask Question</p>
                    <div className="faqInner">
                        <div className="faqContent">
                            <div className="row gy-3">
                                <div className="col-lg-6">
                                    <div className="accordion d-flex flex-column gap-3 m-auto"
                                        id="accordionPanelsStayOpenExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                                    aria-controls="panelsStayOpen-collapseOne">
                                                    <span className="fs_20 fw-semibold fc_button">
                                                        What is Web Development?
                                                    </span>
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show"
                                                aria-labelledby="panelsStayOpen-headingOne">
                                                <div className="accordion-body">
                                                    <p className="fs_18 fc_txt">
                                                        Web Development broadly refers to the tasks associated with
                                                        developing functional websites and applications for the Internet.
                                                        The
                                                        web
                                                        development process includes web design, web content development,
                                                        client-side/server-side
                                                        scripting and network security configuration, among other tasks.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                                <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo"
                                                    aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                                    <span className="fs_20 fw-semibold fc_button">How experienced is your team?
                                                    </span>
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                                                aria-labelledby="panelsStayOpen-headingTwo">
                                                <div className="accordion-body">
                                                    <p className="fs_18 fc_txt">Web Development broadly refers to the tasks
                                                        associated with developing
                                                        functional websites and applications for the Internet. The web
                                                        development
                                                        process includes web design, web content development,
                                                        client-side/server-side
                                                        scripting and network security configuration, among other tasks.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                                <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree"
                                                    aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                                    <span className="fs_20 fw-semibold fc_button">
                                                        How do I get started with your agency?
                                                    </span>
                                                </button>
                                            </h2>

                                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
                                                aria-labelledby="panelsStayOpen-headingThree">
                                                <p className="fs_18 fc_txt">
                                                    Web Development broadly refers to the tasks associated with
                                                    developing
                                                    functional websites and applications for the Internet. The web
                                                    development
                                                    process includes web design, web content development,
                                                    client-side/server-side
                                                    scripting and network security configuration, among other tasks.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="accordion d-flex flex-column gap-3 m-auto"
                                        id="accordionPanelsStayOpenExample2">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                                                <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour"
                                                    aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                                    <span className="fs_20 fw-semibold fc_button">
                                                        Can you help with both small and large projects?
                                                    </span>
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse"
                                                aria-labelledby="panelsStayOpen-headingOne">
                                                <div className="accordion-body">
                                                    <p className="fs_18 fc_txt">
                                                        Web Development broadly refers to the tasks associated with
                                                        developing functional websites and applications for the Internet.
                                                        The
                                                        web
                                                        development process includes web design, web content development,
                                                        client-side/server-side
                                                        scripting and network security configuration, among other tasks.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                                                <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive"
                                                    aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                                                    <span className="fs_20 fw-semibold fc_button">
                                                        How long does it take to complete a project?
                                                    </span>
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse"
                                                aria-labelledby="panelsStayOpen-headingFive">
                                                <div className="accordion-body">
                                                    <p className="fs_18 fc_txt">Web Development broadly refers to the tasks
                                                        associated with developing
                                                        functional websites and applications for the Internet. The web
                                                        development
                                                        process includes web design, web content development,
                                                        client-side/server-side
                                                        scripting and network security configuration, among other tasks.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="panelsStayOpen-headingSix">
                                                <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix"
                                                    aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                                                    <span className="fs_20 fw-semibold fc_button">
                                                        What sets your agency apart from others?
                                                    </span>
                                                </button>
                                            </h2>

                                            <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse"
                                                aria-labelledby="panelsStayOpen-headingSix">
                                                <p className="fs_18 fc_txt">
                                                    Web Development broadly refers to the tasks associated with
                                                    developing
                                                    functional websites and applications for the Internet. The web
                                                    development
                                                    process includes web design, web content development,
                                                    client-side/server-side
                                                    scripting and network security configuration, among other tasks.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className=" text-center mt-5">
                                <Link className="darkBtn" to="/faq">
                                    View More
                                    <img src={Right} alt="img"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;