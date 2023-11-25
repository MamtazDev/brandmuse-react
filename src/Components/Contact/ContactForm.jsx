import React from 'react';
import './ContactStyle.css'

const ContactForm = () => {
    return (
        <div>
            <section className="contact_wrapper">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="text-center text-md-start mb_32 contact_heading">
                                <h2 className="sectionHeader mb-1">
                                    <span className="txt_curve">Contact Us.</span> <br className="d-lg-none d-block" /> It's <br
                                        className="d-lg-block d-none" />
                                    Easy
                                </h2>
                            </div>
                            <p className="text-lg-start text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing erat posuere nec mauris faucibus urna sagittis. Lorem ipsum dolor sit amet consectetur adipiscing elit erat posuere nec mauris faucibus urna sagittis.
                            </p>
                        </div>

                        <div className="col-lg-7  p-lg-0 p-4 ">
                            <form className="contact_form">
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label>Full Name</label>
                                        <input type="text" className="form-control" placeholder="Your name here" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>E-Mail</label>
                                        <input type="email" className="form-control" placeholder="Your mail here" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label for="inputEmail4">Phone Number</label>
                                        <input type="text" className="form-control" id="inputEmail4" placeholder="Phone Number" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Service</label>
                                        <select className="form-select form-select-lg mb-3"
                                            aria-label=".form-select-lg example">
                                            <option selected>Select Service</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>

                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Message</label>
                                    <textarea className="form-control" rows="3" placeholder="Message"></textarea>
                                </div>

                                <button className="submit_btn_contact">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default ContactForm;