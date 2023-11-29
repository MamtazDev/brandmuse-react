import React from 'react';
import { Link } from 'react-router-dom';
import Right from '../../assets/home2/rightArrow.png'

const Faq = () => {
    return (
        <div>
            <section>
                <div class="container">
                    <p class="fs_24 middleheading fc_button mb_38 text-center">FAQ</p>
                    <p class="fs_48 fc_button text-center mb-5">Frequently Ask Question</p>
                    <div class="faqInner">
                        <div class="faqContent">
                            <div class="row gy-3">
                                <div class="col-lg-6">
                                    <div class="accordion d-flex flex-column gap-3 m-auto"
                                        id="accordionPanelsStayOpenExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                                    aria-controls="panelsStayOpen-collapseOne">
                                                    <span class="fs_20 fw-semibold fc_button">
                                                        What is Web Development?
                                                    </span>
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
                                                aria-labelledby="panelsStayOpen-headingOne">
                                                <div class="accordion-body">
                                                    <p class="fs_18 fc_txt">
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

                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo"
                                                    aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                                    <span class="fs_20 fw-semibold fc_button">How experienced is your team?
                                                    </span>
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
                                                aria-labelledby="panelsStayOpen-headingTwo">
                                                <div class="accordion-body">
                                                    <p class="fs_18 fc_txt">Web Development broadly refers to the tasks
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

                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree"
                                                    aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                                    <span class="fs_20 fw-semibold fc_button">
                                                        How do I get started with your agency?
                                                    </span>
                                                </button>
                                            </h2>

                                            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse"
                                                aria-labelledby="panelsStayOpen-headingThree">
                                                <p class="fs_18 fc_txt">
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

                                <div class="col-lg-6">
                                    <div class="accordion d-flex flex-column gap-3 m-auto"
                                        id="accordionPanelsStayOpenExample2">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour"
                                                    aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                                    <span class="fs_20 fw-semibold fc_button">
                                                        Can you help with both small and large projects?
                                                    </span>
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse"
                                                aria-labelledby="panelsStayOpen-headingOne">
                                                <div class="accordion-body">
                                                    <p class="fs_18 fc_txt">
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

                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingFive">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive"
                                                    aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                                                    <span class="fs_20 fw-semibold fc_button">
                                                        How long does it take to complete a project?
                                                    </span>
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse"
                                                aria-labelledby="panelsStayOpen-headingFive">
                                                <div class="accordion-body">
                                                    <p class="fs_18 fc_txt">Web Development broadly refers to the tasks
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

                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingSix">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix"
                                                    aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                                                    <span class="fs_20 fw-semibold fc_button">
                                                        What sets your agency apart from others?
                                                    </span>
                                                </button>
                                            </h2>

                                            <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse"
                                                aria-labelledby="panelsStayOpen-headingSix">
                                                <p class="fs_18 fc_txt">
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

                            <div class=" text-center mt-5">
                                <Link class="darkBtn" to="/faq">
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