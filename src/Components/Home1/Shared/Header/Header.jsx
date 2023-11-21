import React from 'react';
import './Header.css'
import Logo from '../../../../assets/home1/headerLogo.png';
import Menu from '../../../../assets/home1/mobileMenu.png';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img className="img-fluid logoImg" src={Logo} alt="Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <img src={Menu} alt="Menu" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item dropdown">
                                <Link className="nav-link active dropdown-toggle" to="/" id="navbarDropdown"
                                    role="button" data-bs-toggle="dropdown">
                                    Home
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link className="dropdown-item active" to="index.html">Home 1</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="home2.html">Home 2</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="home3.html">Home 3</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="aboutUs.html">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="service.html">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/portfolio">Portfolio</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown1" role="button"
                                    data-bs-toggle="dropdown">
                                    Pages
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                    <li><Link className="dropdown-item" to="blog.html">Blog</Link></li>
                                    <li><Link className="dropdown-item" to="ourProcess.html">Our Process</Link></li>
                                    <li><Link className="dropdown-item" to="faq.html">Faq</Link></li>
                                    <li><Link className="dropdown-item" to="forgetPassword.html">Forget Password</Link></li>
                                    <li><Link className="dropdown-item" to="404.html">404 Error</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact-us">Contact Us</Link>
                            </li>
                        </ul>
                        <form className="d-flex gap-2 authBtn">
                            <Link to="signUp.html">Sign Up</Link>
                            <Link to="login.html">Log in</Link>
                        </form>
                    </div>
                </div>
            </nav>
        </header>

    );
};

export default Header;