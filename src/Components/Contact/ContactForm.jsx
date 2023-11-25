import React from 'react';
import './ContactStyle.css'

const ContactForm = () => {
    return (
        <div>
            <section class="contact_wrapper">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-5">
                            <div class="text-center text-md-start mb_32 contact_heading">
                                <h2 class="sectionHeader mb-1">
                                    <span class="txt_curve">Contact Us.</span> <br class="d-lg-none d-block" /> It's <br
                                        class="d-lg-block d-none" />
                                    Easy
                                </h2>
                            </div>
                            <p class="text-lg-start text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing erat posuere nec mauris faucibus urna sagittis. Lorem ipsum dolor sit amet consectetur adipiscing elit erat posuere nec mauris faucibus urna sagittis.
                            </p>
                        </div>

                        <div class="col-lg-7  p-lg-0 p-4 ">
                            <form class="contact_form">
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label>Full Name</label>
                                        <input type="text" class="form-control" placeholder="Your name here" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label>E-Mail</label>
                                        <input type="email" class="form-control" placeholder="Your mail here" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label for="inputEmail4">Phone Number</label>
                                        <input type="text" class="form-control" id="inputEmail4" placeholder="Phone Number" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label>Service</label>
                                        <select class="form-select form-select-lg mb-3"
                                            aria-label=".form-select-lg example">
                                            <option selected>Select Service</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>

                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Message</label>
                                    <textarea class="form-control" rows="3" placeholder="Message"></textarea>
                                </div>

                                <button class="submit_btn_contact">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default ContactForm;