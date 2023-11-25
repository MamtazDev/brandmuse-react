import React from 'react';
import './FaqStyle.css'

const FaqDetail = () => {
    return (
        <div className='container'>
            <div className="faqInner all_mb">
                <div className=" faqContent">
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
                                                What services does your creative agency offer?
                                            </span>
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show"
                                        aria-labelledby="panelsStayOpen-headingOne">
                                        <div className="accordion-body">
                                            <p className="fs_18 fc_txt">
                                                We offer a wide range of creative services including graphic design,
                                                branding, web development, content creation, social media
                                                management,
                                                and more.
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
                                            <p className="fs_18 fc_txt">
                                                We offer a wide range of creative services including graphic design,
                                                branding, web development, content creation, social media
                                                management,
                                                and more.
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
                                            We offer a wide range of creative services including graphic design,
                                            branding, web development, content creation, social media management,
                                            and
                                            more.
                                        </p>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour"
                                            aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                            <span className="fs_20 fw-semibold fc_button">
                                                Do you provide branding services?
                                            </span>
                                        </button>
                                    </h2>

                                    <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse"
                                        aria-labelledby="panelsStayOpen-headingFour">
                                        <p className="fs_18 fc_txt">
                                            We offer a wide range of creative services including graphic design,
                                            branding, web development, content creation, social media management,
                                            and
                                            more.
                                        </p>
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
                                            <p className="fs_18 fc_txt">We offer a wide range of creative services
                                                including
                                                graphic design, branding, web development, content creation, social
                                                media management, and more.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="accordion d-flex flex-column gap-3 m-auto"
                                id="accordionPanelsStayOpenExample2">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingSix">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix"
                                            aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                                            <span className="fs_20 fw-semibold fc_button">
                                                Can you help with both small and large projects?
                                            </span>
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse"
                                        aria-labelledby="panelsStayOpen-headingOne">
                                        <div className="accordion-body">
                                            <p className="fs_18 fc_txt">
                                                We offer a wide range of creative services including graphic design,
                                                branding, web development, content creation, social media
                                                management,
                                                and more.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingSeven">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven"
                                            aria-expanded="false" aria-controls="panelsStayOpen-collapseSeven">
                                            <span className="fs_20 fw-semibold fc_button">
                                                How long does it take to complete a project?
                                            </span>
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseSeven" className="accordion-collapse collapse"
                                        aria-labelledby="panelsStayOpen-headingFive">
                                        <div className="accordion-body">
                                            <p className="fs_18 fc_txt">We offer a wide range of creative services
                                                including
                                                graphic design, branding, web development, content creation, social
                                                media management, and more.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingEight">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight"
                                            aria-expanded="false" aria-controls="panelsStayOpen-collapseEight">
                                            <span className="fs_20 fw-semibold fc_button">
                                                What sets your agency apart from others?
                                            </span>
                                        </button>
                                    </h2>

                                    <div id="panelsStayOpen-collapseEight" className="accordion-collapse collapse"
                                        aria-labelledby="panelsStayOpen-headingSix">
                                        <p className="fs_18 fc_txt">
                                            We offer a wide range of creative services including graphic design,
                                            branding, web development, content creation, social media management,
                                            and
                                            more.
                                        </p>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingNine">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseNine"
                                            aria-expanded="false" aria-controls="panelsStayOpen-collapseNine">
                                            <span className="fs_20 fw-semibold fc_button">
                                                What sets your agency apart from others?
                                            </span>
                                        </button>
                                    </h2>

                                    <div id="panelsStayOpen-collapseNine" className="accordion-collapse collapse"
                                        aria-labelledby="panelsStayOpen-headingSix">
                                        <p className="fs_18 fc_txt">
                                            We offer a wide range of creative services including graphic design,
                                            branding, web development, content creation, social media management,
                                            and
                                            more.
                                        </p>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingTen">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTen"
                                            aria-expanded="false" aria-controls="panelsStayOpen-collapseTen">
                                            <span className="fs_20 fw-semibold fc_button">
                                                What sets your agency apart from others?
                                            </span>
                                        </button>
                                    </h2>

                                    <div id="panelsStayOpen-collapseTen" className="accordion-collapse collapse"
                                        aria-labelledby="panelsStayOpen-headingSix">
                                        <p className="fs_18 fc_txt">
                                            We offer a wide range of creative services including graphic design,
                                            branding, web development, content creation, social media management,
                                            and
                                            more.
                                        </p>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingEleven">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseEleven" aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseEleven">
                                            <span className="fs_20 fw-semibold fc_button">
                                                What sets your agency apart from others?
                                            </span>
                                        </button>
                                    </h2>

                                    <div id="panelsStayOpen-collapseEleven" className="accordion-collapse collapse"
                                        aria-labelledby="panelsStayOpen-headingSix">
                                        <p className="fs_18 fc_txt">
                                            We offer a wide range of creative services including graphic design,
                                            branding, web development, content creation, social media management,
                                            and
                                            more.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqDetail;