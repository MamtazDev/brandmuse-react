import React from 'react';
import './Header.css'
import Logo from '../../../../assets/home3/logo.png'
import Menu from '../../../../assets/home3/mobileMenu.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header3 home3Bg'>
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <Link class="navbar-brand" to="/home3">
                        <img class="img-fluid logoImg" src={Logo} alt="Logo" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <img src={Menu} alt="Menu" />
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav m-auto">
                            <li class="nav-item dropdown">
                                <Link className='nav-link dropdown-toggle' to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" >
                                    Home
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" >
                                    <li>
                                        <Link className={location.pathname === '/' ? 'dropdown-item active' : 'dropdown-item'} to="/">Home 1</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/home2">Home 2</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/home3">Home 3</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className={location.pathname === '/about-us' ? 'nav-link active' : 'nav-link'} to="/about-us">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={location.pathname === '/service' ? 'nav-link active' : 'nav-link'} to="/service">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={location.pathname === '/portfolio' ? 'nav-link active' : 'nav-link'} to="/portfolio">Portfolio</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown1" role="button"
                                    data-bs-toggle="dropdown">
                                    Pages
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                    <li>
                                        <Link className={location.pathname === '/blog' ? 'dropdown-item active' : 'dropdown-item'} to="/blog">Blog</Link>
                                    </li>
                                    <li>
                                        <Link className={location.pathname === '/ourProcess' ? 'dropdown-item active' : 'dropdown-item'} to="/ourProcess">Our Process</Link>
                                    </li>
                                    <li>
                                        <Link className={location.pathname === '/faq' ? 'dropdown-item active' : 'dropdown-item'} to="/faq">Faq</Link>
                                    </li>
                                    <li>
                                        <Link className={location.pathname === '/forgetPassword' ? 'dropdown-item active' : 'dropdown-item'} to="/forgetPassword">Forget Password</Link>
                                    </li>
                                    <li>
                                        <Link className={location.pathname === '/404' ? 'dropdown-item active' : 'dropdown-item'} to="/404">404 Error</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className={location.pathname === '/contact-us' ? 'nav-link active' : 'nav-link'} to="/contact-us">Contact Us</Link>
                            </li>
                        </ul>
                        <form className="d-flex gap-2 authBtn">
                            <Link to="/signUp">Sign Up</Link>
                            <Link to="/login">Log in</Link>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;