import React from 'react';
import { Link } from 'react-router-dom';
import Fb from '../../../../assets/home3/facebook.svg';
import Ig from '../../../../assets/home3/instagram.svg';
import Logo from '../../../../assets/home3/logo.png';
import Tw from '../../../../assets/home3/Twitter.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer3'>
            <footer>
                <div className="container">
                    <div className="row gy-3">
                        <div className="col-lg-3">
                            <div className="text-center text-lg-start">
                                <Link to="/home3">
                                    <img className="img-fluid" src={Logo} alt="Logo" />
                                </Link>
                                <p className="mt-3">
                                    We growing up your business with our creativity
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-md-3 col-lg-2">
                            <ul className="text-center text-md-start">
                                <li>Links</li>
                                <li><Link to="/index">Home</Link></li>
                                <li><Link to="/service">Service</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/contact-us">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-lg-2">
                            <ul className="text-center text-md-start">
                                <li>Official info</li>
                                <li>
                                    <p>101 Independence Avenue,USA.</p>
                                </li>
                                <li>
                                    <p>2-888-452-1505</p>
                                </li>
                                <li>
                                    <p>Info.mail@gmail.com</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-5 col-lg-4">
                            <div className="footerEnd text-center text-md-start">
                                <span className="d-block mb-3">Follow us</span>
                                <div
                                    className="socialLink d-flex justify-content-center justify-content-md-start align-items-center ">
                                    <a href="https://www.instagram.com/accounts/login/" className="d-block overflow-hidden">
                                        <img src={Ig}
                                            alt="instagram" />
                                    </a>
                                    <a href="https://www.facebook.com/" className="d-block overflow-hidden">
                                        <img src={Fb}
                                            alt="facebook" />
                                    </a>
                                    <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" className="d-block overflow-hidden">
                                        <img src={Tw}
                                            alt="Twitter" />
                                    </a>
                                </div>

                                <div
                                    className="footerForm d-flex justify-content-center justify-content-md-start gap-2 align-items-center align-items-md-start">
                                    <div className="subscribe d-flex align-items-center gap-2 ">
                                        <input id="email_icon" type="email" name="email" placeholder="Enter your email" />
                                        <button className="d-block d-md-none">Subscribe</button>
                                    </div>
                                    <button className="d-none d-md-block">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <p className="text-center">© 2023 OpediaStudio. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;